import React, {memo, useMemo, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortId from 'shortid';

import systemEvents from '../../events/systemEvents';
import {calcControlSize} from '../../utils/helpers';

import './Html.scss';

const mainCssClass = 'html';

/**
 * Компонент "Html"
 * @param {Object} props Входные параметры компонетна
 * @param {string} props.className Кастомные css классы
 * @param {string} props.id Идентификатор корневого DOM элемента
 * @param {Object} props.dataAttrs Объект data атрибутов для компонента
 * @param {boolean} props.value Значение элемента
 * @param {string} props.style Стили для контрола
 * @param {string} props.GUID Глобальный уникальный идентификатор
 * @param {boolean} props.isExcluded Признак отсутствия компонента в вёрстке
 * @param {string} props.name Имя контрола
 * @returns {ReactClass}
 * @constructor
 */
function Html(props) {
    const {
        className,
        id,
        dataAttrs,
        isExcluded,
        value,
        style: _style,
        name,
        GUID,
        isFixSize,
        stringedHtml
    } = props;
    const frameRef = useRef(null);
    const style = useMemo(() => calcControlSize({isFixSize, style: _style}), [isFixSize, _style]);

    if (isExcluded) {
        return null;
    }

    const uniqueId = id || GUID || name || shortId.generate();
    const classes = classNames(className, mainCssClass);

    const handleMouseUp = event => {
        if (systemEvents.onIFrameClick && event.button === 0) {
            const data = event.target.dataset || {};
            const formId = frameRef.current?.dataset?.formId;

            if (Object.keys(data).length) {
                const requestData = {
                    controlId: name,
                    formId,
                    data
                };
                systemEvents.onIFrameClick(requestData);
            }
        }
    };

    const handleLoad = () => {
        const iFrame = frameRef.current?.contentDocument;
        iFrame.onmouseup = handleMouseUp;
    };

    return <iframe
        srcDoc={name === 'QuillJS1' ? stringedHtml : undefined}
        ref={frameRef}
        src={name === 'QuillJS1' ? undefined : value}
        className={classes}
        id={uniqueId}
        style={style}
        onLoad={handleLoad}
        {...dataAttrs}
    />;
}

Html.defaultProps = {
    value: '',
    style: null
};

Html.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string.isRequired,
    dataAttrs: PropTypes.object,
    style: PropTypes.object,
    name: PropTypes.string,
    GUID: PropTypes.string
};

export default memo(Html);

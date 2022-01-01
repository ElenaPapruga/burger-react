import React from 'react';
import shortid from 'shortid';
import Frame from '../components/Frame';
import Group from '../components/Group';
import Box from '../components/Box';
import String from '../components/String';
import Number from '../components/Number';
import Integer from '../components/Integer';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import Date from '../components/Date';
import Label from '../components/Label';
import Enum from '../components/Enum/Enum';
import MenuBar from '../components/MenuBar/MenuBar';
import Report from '../components/Report/Report';
import ListButton from '../components/ListButton/ListButton';
import Tree from '../components/Tree/Tree';
import Pdf from '../components/Pdf/Pdf';
import Img from '../components/Img';
import Html from '../components/Html/Html';
import RoleCenter from '../components/RoleCenter';
import Chart from '../components/Chart';
import Table from '../components/Table';
import Tabs from '../components/Tabs';
import Grid from '../components/Grid';
import Upload from '../components/Upload';
import Shortlist from '../components/Shortlist';
import SimpleHtml from '../components/SimpleHtml';
import ScriptedHtml from '../components/ScriptedHtml';

export default function getElement(element, disabledParent, children = null) {
    const {GUID, type, isDisabled, isExcluded, isStatic, hint, name, style, events, title, metaSet, dataAttrs} = element;

    if (isExcluded) {
        return null;
    }

    const _key = name || GUID || shortid.generate();

    const props = {
        ...element,
        id: GUID?.replace(/\s/g, '_'),
        style,
        hint: hint || title,
        isDisabled: disabledParent || isDisabled,
        isStatic,
        dataAttrs: {
            'data-guid': GUID || null,
            'data-type': type || null,
            'data-name': name || null,
            ...dataAttrs
        },
        metaSet,
        events
    };

    if (!props.hasOwnProperty('hasActiveMode')) {
        props.hasActiveMode = true;
    }

    if (type === 'frame') {
        props.orientation = element.orientation;
        return <Frame key={_key} isFixSize={false} autoSize={false} {...props}>{children}</Frame>;
    } else if (type === 'tabs') {
        return <Tabs key={_key} {...props}>{children}</Tabs>;
    } else if (type === 'box') {
        return <Box key={_key} {...props}>{children}</Box>;
    } else if (type === 'group') {
        return <Group key={_key} autoSize={true} {...props}>{children}</Group>;
    } else if (type === 'table') {
        return <Table key={_key} {...props}>{children}</Table>;
    } else if (type === 'grid') {
        return <Grid key={_key} {...props}>{children}</Grid>;
    } else if (type === 'simpleHtml') {
        return <SimpleHtml key={_key} {...props}/>;
    } else if (type === 'string') {
        return <String key={_key} {...props}/>;
    } else if (type === 'button') {
        return <Button key={_key} {...props}/>;
    } else if (type === 'checkbox') {
        return <Checkbox key={_key} {...props}/>;
    } else if (type === 'number') {
        return <Number key={_key} {...props}/>;
    } else if (type === 'integer') {
        return <Integer key={_key} {...props}/>;
    } else if (type === 'date') {
        return <Date key={_key} {...props}/>;
    } else if (type === 'label') {
        return <Label key={_key} {...props}/>;
    } else if (type === 'enum') {
        return <Enum key={_key} {...props}/>;
    } else if (type === 'menuBar') {
        return <MenuBar key={_key} {...props}>{children}</MenuBar>;
    } else if (type === 'report') {
        return <Report key={_key} {...props}/>;
    } else if (type === 'listButton') {
        return <ListButton key={_key} {...props}>{children}</ListButton>;
    } else if (type === 'tree') {
        return <Tree key={_key} {...props}/>;
    } else if (type === 'pdf') {
        return <Pdf key={_key} {...props}/>;
    } else if (type === 'img') {
        return <Img key={_key} {...props}/>;
    } else if (type === 'html') {
        return <Html key={_key} {...props}/>;
    } else if (type === 'roleCenter') {
        return <RoleCenter key={_key} {...props}/>;
    } else if (type === 'chart') {
        return <Chart key={_key} {...props}/>;
    } else if (type === 'upload') {
        return <Upload key={_key} {...props} />;
    } else if (type === 'shortlist') {
        return <Shortlist key={_key} {...props} />;
    } else if (type === 'scriptedhtml') {
        return <ScriptedHtml key={_key} {...props}/>;
    }

    return null;
}

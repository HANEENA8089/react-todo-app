import React from 'react';
import InputBox from './InputBox';
import SearchBox from './SearchBox';
import { MODE_SEARCH, MODE_CREATE } from '../../services/mode';

export default function InputWrapper(props) {
    const { mode, addNew, query, setSearchQuery, priority, setPriority } = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{ addNew, priority, setPriority }} />;

        case MODE_SEARCH:
            return <SearchBox {...{ query, setSearchQuery }} />;

        default:
            return null;
    }
}

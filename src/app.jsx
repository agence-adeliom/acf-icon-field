import '@agence-adeliom/awc/themes/light.css';
import './app.css';
import { render, h } from 'preact';
import {useRef, useState, useEffect} from "preact/hooks";
import {AWCDialog, AWCInput, AWCIcon, AWCTree, AWCTreeItem, AWCIconButton} from "@agence-adeliom/awc/react";
import {AutoSizer, Grid} from "react-virtualized";

window.acf_icons = window.acf_icons ?? [];

const COLUMNS = 5;

const IconCell = ({icon, onClick, active = false, style = {}}) => {
    return (
        <div
            className={["icon-item", active ? 'icon-item--active' : ''].join(' ')}
            style={style}
            onClick={onClick}>
            <div>
                <AWCIcon
                    name={`${icon.prefix ? icon.prefix + '-' : ''}${icon.id}`}
                    library={icon.library}
                    title={icon.name}
                    loading={'lazy'}
                ></AWCIcon>
                <div><span>{icon.name}</span></div>
            </div>
        </div>
    )
}
const App = ({name = '', value = null, exclude = '[]'}) => {
    const excluded = JSON.parse(exclude);

    const libraries = window.acf_icons.filter((library) => {
        return !excluded.includes(library.library);
    });

    const icons = libraries.reduce((icons, library) => {
        return [
            ...icons,
            ...library.icons.map((icon) => {
                return {
                    id: icon.id,
                    name: icon.name,
                    prefix: icon?.subset?.prefix ?? icon?.prefix ?? '',
                    library: library.library ?? '',
                }
            }).filter((icon) => !excluded.includes(icon.library + '_' + icon.prefix))
        ]
    }, []).sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });

    const [selected, setSelected] = useState(value ? JSON.parse(value) : '');
    const [iconList, setIconList] = useState(icons);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState({
        query: '',
        libraries: [],
        prefixes: [],
    });
    const grid = useRef();



    const onIconSelect = (icon) => {
        setSelected(icon);
        setOpen(false);
    }

    useEffect(() => {
        if (!search.query && !search.libraries.length && !search.prefixes.length) {
            setIconList(icons);
        } else {
            const results = icons.filter((item) => {
                return (
                    (search.query === '' || item.name.toLowerCase().includes(search.query.toLowerCase())) &&
                    (
                        search.libraries.length === 0 || search.libraries.includes(item.library)
                    ) && (
                        search.prefixes.length === 0 || search.prefixes.includes(item.prefix)
                    )
                );
            });
            setIconList(results ?? []);
        }
    }, [search]);

    useEffect(() => {
        const input = document.querySelector(`input[name="${name}"]`);
        if(input){
            input.value = JSON.stringify(selected);
            input.dispatchEvent(new Event('change', { 'bubbles': true }))
        }
    }, [selected]);

    return (
        <div>
            {selected && (
                <div className={"icon__selected"}>
                    <AWCIcon name={`${selected.prefix ? `${selected.prefix}-` : ''}${selected.id}`} library={selected.library} />
                    <span>{selected.name}</span>
                    <AWCIconButton name={"x-circle-fill"} title={acf._e("icon", "clear")} onClick={() => setSelected('')}/>
                </div>
            )}
            <AWCDialog open={open} onAwcHide={() => setOpen(false)} className={"icon__dialog"} >
                <div slot={"label"}>{acf._e("icon", "dialog")}</div>
                <div className={"icon__dialog--content"}>
                    <div>
                        <AWCTree onAwcSelectionChange={(e) => {
                            const librariesSet = new Set();
                            const prefixesSet = new Set();

                            const libraries = e?.detail?.selection.reduce((set, item) => {
                                if (item.dataset.library) {
                                    set.add(item.dataset.library);
                                }
                                return set;
                            }, librariesSet);
                            const prefixes = e?.detail?.selection.reduce((set, item) => {
                                if (item.dataset.library && item.dataset.prefix) {
                                    set.add(item.dataset.prefix);
                                }
                                return set;
                            }, prefixesSet);
                            setSearch({
                                ...search,
                                libraries: [...libraries],
                                prefixes: [...prefixes],
                            });
                        }}>
                            {libraries.map((lib, i) => {
                                return (
                                    <AWCTreeItem key={lib.library} data-library={lib.library}>
                                        {lib.name}
                                        {Object.keys(lib?.subsets ?? [])
                                            .filter((subset) => !excluded.includes(lib.library + '/' + subset))
                                            .map((subset) => {
                                                const child = lib.subsets[subset];
                                                if(!child) {
                                                    return null;
                                                }
                                                return (
                                                    <AWCTreeItem key={`${lib.library}_${child.prefix}`}
                                                                 data-library={lib.library} data-prefix={child.prefix}>
                                                        {child.name}
                                                    </AWCTreeItem>
                                                )
                                            }
                                        )}
                                    </AWCTreeItem>
                                )
                            })}
                        </AWCTree>
                    </div>
                    <div className={"icon__list"}>
                        <AWCInput clearable
                                  placeholder={acf._e("icon", "placeholder")}
                                  size="large"
                                  autocomplete="off"
                                  onAwcInput={e => {
                                      setSearch({
                                          ...search,
                                          query: e.target.value
                                      });
                                  }}
                        >
                            <AWCIcon name="search" slot="prefix"></AWCIcon>
                        </AWCInput>
                        <AutoSizer disableHeight className={"icon__list--grid"}>
                            {({width}) => (
                                <Grid
                                    ref={grid}
                                    cellRenderer={({columnIndex, key, rowIndex, style}) => {
                                        if (!iconList[rowIndex * COLUMNS + columnIndex]) {
                                            return null;
                                        }
                                        const icon = iconList[rowIndex * COLUMNS + columnIndex];
                                        const isSelected = icon.id === selected?.id && icon.library === selected?.library && icon.prefix === selected?.prefix;
                                        return <IconCell
                                                key={`${key}_${icon.prefix}${icon.id}`}
                                                style={style}
                                                className='icon-item'
                                                active={isSelected}
                                                icon={icon}
                                                onClick={() => onIconSelect(icon)}>
                                            </IconCell>
                                    }}
                                    columnCount={COLUMNS}
                                    columnWidth={width / COLUMNS}
                                    height={500}
                                    rowCount={Math.floor(iconList.length / COLUMNS)}
                                    rowHeight={(width / COLUMNS) * 1.25}
                                    width={width}
                                />
                            )}
                        </AutoSizer>

                    </div>
                </div>
            </AWCDialog>
            <button className="acf-btn acf-btn-sm" onClick={() => setOpen(true)}>{acf._e("icon", "button")}</button>
        </div>
    );
};

/**
 * Included when icon_field fields are rendered for editing by publishers.
 */
( function( $ ) {
    function initialize_field( field ) {
        /**
         * $field is a jQuery object wrapping field elements in the editor.
         */

        const wrapper = field.find('.acf-icon-wrapper').get(0);
        const name = wrapper.dataset.name;
        const value = wrapper.dataset.value;
        const exclude = wrapper.dataset.exclude;
        render(h(App, {name, value, exclude}), wrapper);
    }

    if( typeof acf.add_action !== 'undefined' ) {
        /**
         * Run initialize_field when existing fields of this type load,
         * or when new fields are appended via repeaters or similar.
         */
        acf.add_action( 'ready_field/type=icon', initialize_field );
        acf.add_action( 'append_field/type=icon', initialize_field );
    }
} )( jQuery );

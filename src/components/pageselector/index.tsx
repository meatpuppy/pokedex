import { PageSelect } from "./styles";
import arrow from "../../assets/arrow.png";
import { StoreContext } from "components/global/global";
import { useContext, useEffect, useState } from "react";

interface PageSelectorProps {
    getPokemonList: (limit: number, offset: number) => void;
}

export const PageSelector = (props: PageSelectorProps) => {
    const { isFiltering, filteredPokemonList, currentPage, setCurrentPage } = useContext(StoreContext)
    const [allPokemonPageCount, setAllPokemonPageCount] = useState<number>(0);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setAllPokemonPageCount(Math.ceil(response.count / 20));
            });
    }, []);

    useEffect(() => {
        if (isFiltering){
            return
        }
        props.getPokemonList(20, (currentPage - 1) * 20);
    }, [currentPage, isFiltering]);

    function getPageCount () {
        if(!isFiltering){
            return allPokemonPageCount
        }
        return Math.ceil(filteredPokemonList.length / 20)
    }

    const pageCount = getPageCount()

    const array = [];

    for (let x = 0; x < pageCount; x++) {
        array.push(
            <button
                key={x}
                onClick={() => {
                    setCurrentPage(x + 1);
                }}
            >
                {x + 1}
            </button>
        );
    }

    const createArrowDown = (currentPage: number) => {
        if (currentPage !== 1) {
            return (
                <img
                    className="leftArrow"
                    src={arrow}
                    onClick={() => {
                        setCurrentPage(currentPage - 1);
                    }}
                />
            );
        }
    };

    const createArrowUp = (currentPage: number) => {
        if (currentPage !== pageCount) {
            return (
                <img
                    className="rightArrow"
                    src={arrow}
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                />
            );
        }
    };

    return (
        <PageSelect>
            {createArrowDown(currentPage)}
            {array}
            {createArrowUp(currentPage)}
        </PageSelect>
    );
};

import { PageSelect } from "./styles";
import arrow from "../../assets/arrow.png";
import { StoreContext } from "components/global/global";
import { useContext, useEffect, useState } from "react";

interface PageSelectorProps {
    getPokemonList: (limit: number, offset: number) => void;
}

export const PageSelector = (props: PageSelectorProps) => {
    const [pageCount, setPageCount] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setPageCount(Math.ceil(response.count / 20));
            });
    }, []);

    useEffect(() => {
        props.getPokemonList(20, (currentPage - 1) * 20);
    }, [currentPage]);

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
        if (currentPage !== 57) {
            return (
                <img
                    className="rightArrow"
                    src={arrow}
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                        // props.getPokemonList(20, (currentPage+1)*20);
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

import { Container, PageButton, PageSelect, RandomPage } from "./styles";
import arrow from "../../assets/arrow.png";
import { StoreContext } from "components/global/global";
import { useContext, useEffect, useState } from "react";

interface PageSelectorProps {
    getPokemonList: (limit: number, offset: number) => void;
}

export const PageSelector = (props: PageSelectorProps) => {
    const { isFiltering, filteredPokemonList, currentPage, setCurrentPage } =
        useContext(StoreContext);
    const [allPokemonPageCount, setAllPokemonPageCount] = useState<number>(0);

    function goToRandomPage() {
        const min = Math.ceil(1);
        const max = Math.floor(58); 
        setCurrentPage(Math.floor(Math.random() * (max - min)) + min)
    }

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
        if (isFiltering) {
            return;
        }
        props.getPokemonList(20, (currentPage - 1) * 20);
    }, [currentPage, isFiltering]);

    function getPageCount() {
        if (!isFiltering) {
            return allPokemonPageCount;
        }
        return Math.ceil(filteredPokemonList.length / 20);
    }

    const pageCount = getPageCount();

    const array = [];

    const numberOfElements = 5;

    let initialValue = currentPage - Math.floor(numberOfElements / 2);

    initialValue = Math.max(initialValue, 1);

    const excess = initialValue + numberOfElements - pageCount;

    if (excess > 0) {
        initialValue -= excess;
    }

    for (let x = initialValue; x < initialValue + numberOfElements; x++) {
        array.push(
            <PageButton
                isSelected={currentPage === x}
                key={x}
                onClick={() => {
                    setCurrentPage(x);
                }}
            >
                {x}
            </PageButton>
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
        <Container>
            <RandomPage onClick={() => goToRandomPage()}>Random page</RandomPage>
            <PageSelect>
                {createArrowDown(currentPage)}
                {array}
                {createArrowUp(currentPage)}
            </PageSelect>
        </Container>
    );
};

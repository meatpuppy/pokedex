import { PageButton, PageSelect } from "./styles";
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

    const numberOfElements = 5

    let initialValue = currentPage-Math.floor(numberOfElements/2)

    initialValue = Math.max(initialValue,1)

    const excess = initialValue+numberOfElements-pageCount

    if(excess > 0){
        initialValue-=excess
    }
    
    for (let x = initialValue; x < initialValue+numberOfElements; x++) {
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

    // const PageSliceDownToZero = () => {
    //     if (((currentPage-1)-2) <= 0){
    //         return 0
    //     } else if (((currentPage-1)-2) >= 3){
    //         return ((currentPage-1)-2)
    //     }
    // }

    // const PageSliceMax = () => {
    //     if (((currentPage-1)-2) <= 2){
    //         return 5
    //     } else if 
    //     (((currentPage-1)-2) >= 3){
    //         return ((currentPage-1)+3)
    //     }
    // }


    return (
        <PageSelect>
            {createArrowDown(currentPage)}
            {/* {array.slice(PageSliceDownToZero(), PageSliceMax())} */}
            {array}
            {createArrowUp(currentPage)}
        </PageSelect>
    );
};

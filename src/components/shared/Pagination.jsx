import React from "react";
import menor from "../../assets/arrowright.svg";
import mayor from "../../assets/arrowleft.svg";
import { useDispatch, useSelector } from "react-redux";
import { updatePagination } from "../../modules/actions/products";

export const Pagination = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  let numbersPages = state.numberPage;
  let numberPage = state.numberPagination;
  const backPage = () => {
    if (numberPage !== 0) {
      let num = numberPage - 1;
      dispatch(updatePagination(num, numbersPages));
    }
  };
  const selectPage = (number) => {
    dispatch(updatePagination(number, numbersPages));
  };
  const nextPage = () => {
    if (numberPage !== numbersPages.length - 1) {
      let num = numberPage + 1;
      dispatch(updatePagination(num, numbersPages));
    }
  };

  let dataprueba = [
    {
      numberpage: 0,
    },
    {
      numberpage: 1,
    },
    {
      numberpage: 2,
    },
    {
      numberpage: 3,
    },
  ];
  if (numbersPages.length > 1) {
    return (
      <div className="bg-neutral10 flex justify-center gap-x-1 items-center py-1">
        <div
          className="h-5 w-5 flex justify-center items-center cursor-pointer"
          onClick={backPage}
        >
          <img src={mayor} alt="mayor" />
        </div>
        <NumberPagination
          numbersPages={numbersPages}
          numberPage={numberPage}
          selectPage={selectPage}
        />
        <div
          className="h-5 w-5 flex justify-center items-center cursor-pointer"
          onClick={nextPage}
        >
          <img src={menor} alt="menor" />
        </div>
      </div>
    );
  } else {
    return (
      <>
      </>
    );
  }
};

const NumberPagination = ({ numbersPages, numberPage, selectPage }) => {
  if (numbersPages.length > 0) {
    let separatePage = [];
    let start = 0;
    let end = 4;
    if (numberPage === 0) {
      separatePage = numbersPages.slice(start, end);
      return (
        <>
          {separatePage.map((page, i) => (
            <div key={i}>
              {page.numberpage < 3 ? (
                <div
                  className={`h-5 w-5 medium:hover:bg-neutral80 medium:hover:font-bold medium:hover:text-white flex justify-center items-center hover:cursor-pointer ${
                    page.numberpage === numberPage &&
                    "bg-neutral80 font-bold text-white"
                  }`}
                  onClick={() => {
                    if (page.numberpage < 3) {
                      selectPage(page.numberpage);
                    }
                  }}
                  key={i}
                >
                  <span className="block">{page.numberpage + 1}</span>
                </div>
              ) : (
                <div
                  className={`h-5 w-5 flex justify-center items-center`}
                  key={i}
                >
                  <span>...</span>
                </div>
              )}
            </div>
          ))}
        </>
      );
    } else if (numberPage > 0 && numberPage < numbersPages.length - 1) {
      if (numberPage < 2) {
        separatePage = numbersPages.slice(0, 4);
      } else {
        start = numberPage - 2;
        end = numberPage + 2;
        separatePage = numbersPages.slice(start, end);
      }
      return (
        <>
          {separatePage.map((page, i) => (
            <div key={i}>
              {i < 3 ? (
                <div
                  className={`h-5 w-5 medium:hover:bg-neutral80 medium:hover:font-bold medium:hover:text-white flex justify-center items-center hover:cursor-pointer ${
                    page.numberpage === numberPage &&
                    "bg-neutral80 font-bold text-white"
                  }`}
                  onClick={() => {
                    if (i < 3) {
                      selectPage(page.numberpage);
                    }
                  }}
                  key={i}
                >
                  <span className="block">{page.numberpage + 1}</span>
                </div>
              ) : (
                <div
                  className={`h-5 w-5 flex justify-center items-center`}
                  key={i}
                >
                  <span>...</span>
                </div>
              )}
            </div>
          ))}
        </>
      );
    } else if (numberPage === numbersPages.length - 1) {
      if (numberPage > 2) {
        start = numberPage - 3;
      } else {
        start = 0;
      }
      end = numberPage + 1;
      separatePage = numbersPages.slice(start, end);
      return (
        <>
          {separatePage.map((page, i) => (
            <div
              className={`h-5 w-5 medium:hover:bg-neutral80 medium:hover:font-bold medium:hover:text-white flex justify-center items-center hover:cursor-pointer ${
                page.numberpage === numberPage &&
                "bg-neutral80 font-bold text-white"
              }`}
              onClick={() => {
                selectPage(page.numberpage);
              }}
              key={i}
            >
              <span>{page.numberpage + 1}</span>
            </div>
          ))}
        </>
      );
    }
  } else {
    return (
      <>
        <span>No page</span>
      </>
    );
  }
};

import * as React from "react";
import useSWR from "swr";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowForward } from "react-icons/io";
import Header from "../../../components/header/Header";
import Axios from "axios";
import { faqRoutes } from "../../../Api/Routes";
import { GlobalState } from "../../../interfaces/state";
import { setGlobalFaqs } from "../../../Redux_Store/actions/global_actions/actions";
import { FAQS } from "../../../interfaces/Reducers/GlobalReducer";
import "./Global_Help.scss";
import Loader from "react-loader-spinner";

const axiosFaqs = async (url: string) => {
  const { data } = await Axios.get(url);
  if (data === undefined) {
    return false;
  }
  return data.res;
};

const Global_Help = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state: GlobalState) => state.global);

  const [openOptions, setOpenOptions] = React.useState<boolean>(false);
  const [optionNum, setOptionNum] = React.useState<number>(0);
  const [numHeader, setNumHeader] = React.useState<number>(0);
  const [faqArr, setFaqArr] = React.useState<FAQS[]>(undefined);

  React.useEffect(() => {
    if (globalState.faqs !== undefined) {
      setFaqArr(globalState.faqs);
    }
  }, []);

  useSWR(globalState.faqs === undefined ? faqRoutes.faqURL : null, axiosFaqs, {
    onSuccess: (data) => {
      dispatch(setGlobalFaqs(data));
      setFaqArr(data);
    },
  });

  const getValue = (el: any) => {
    if (el.openFaq) {
      return false;
    }
    return true;
  };

  const openFAQ = (id: number) => {
    setNumHeader(id);
    setFaqArr(
      faqArr.map((el: any) =>
        el.id === id
          ? { ...el, openFaq: getValue(el) }
          : { ...el, openFaq: false }
      )
    );
  };

  return (
    <div className="user_home">
      <div className="help_home_dis">
        <Header header="Ayuda" header_class="fix_header" />
        {faqArr !== undefined ? (
          faqArr.map((el: FAQS) => (
            <div
              key={el.id}
              className="help_box"
              onClick={() => {
                openFAQ(el.id);
              }}
            >
              <h3>{el.question}</h3>
              {el.headers.map((res: any, index: number) =>
                el.openFaq && numHeader === el.id ? (
                  <div
                    className="help_item"
                    key={index}
                    onClick={() => {
                      setOpenOptions(!openOptions);
                      setOptionNum(index);
                    }}
                  >
                    <h3 key={res}>{res}</h3>
                    {openOptions && optionNum === index
                      ? el.anwsers.map((option: string, optionInd: number) => (
                          <h3 key={optionInd}>{option}</h3>
                        ))
                      : null}
                  </div>
                ) : null
              )}
            </div>
          ))
        ) : (
          <div className="loader_div">
            <Loader
              type="Grid"
              color="rgb(23, 66, 109)"
              height={80}
              width={80}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Global_Help;

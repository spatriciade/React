import "./Expenses.css";
import ItemIcon from "./items/ItemIcon";
import ItemInfo from "./items/ItemInfo";
import ItemCost from "./items/ItemCost";
import { itemsList } from "../itemsDB/Items";
import ItemContainer from "./Wrappers/ItemContainer";
import Wrapper from "./Wrappers/Wrapper";


function Expenses() {
   
    return (
       <Wrapper>
        <ItemContainer>
            
                <ItemIcon icons={itemsList[0].icons} />
                <ItemInfo data={itemsList[0].data} />
                <ItemCost money={itemsList[0].money} />
           </ItemContainer>
        </Wrapper>
    );
}

export default Expenses;

/* item
          <div className="item-container">
              <div className="item-icon fa-4x flex-20 flex-center">
                  <span className="fa-layers fa-fw fa-xl">
                      <FontAwesomeIcon icon={faSquare} className="light-incoming" />
                      <FontAwesomeIcon icon={faBriefcase}
                          inverse
                          transform="shrink-8"
                          className="bill" />
 
                  </span>
              </div>
              <div className="item-info flex-60">
                  <h2>Freelancing Work</h2>
                  <small className="expense-date">31/08/25</small>
 
              </div>
              <div className="item-cost flex-20 income fa-3x flex-center">
                  <span>&#43; $260</span>
                  <FontAwesomeIcon icon={faArrowUpLong} className="m-left-20" />
                 
              </div>
 
          </div>
          {/* item */

/* <div className="item-container">
              <div className="item-icon fa-4x flex-20 flex-center">
                  <span className="fa-layers fa-fw fa-xl">
                      <FontAwesomeIcon icon={faSquare} className="light-bizum" />
                      <FontAwesomeIcon icon={faCommentDollar}
                          inverse
                          transform="shrink-8"
                          className="bizum" />
 
                  </span>
              </div>
              <div className="item-info flex-60">
                  <h2>Send Bizum to a Friend</h2>
                  <small className="expense-date">01/09/25</small>
 
              </div>
              <div className="item-cost flex-20 expense fa-3x flex-center">
                  <span>&#8722; $500</span>
                  <FontAwesomeIcon icon={faArrowDownLong} className="m-left-20" />
              </div>
 
          </div> */

/* item */

/* <div className="item-container">
              <div className="item-icon fa-4x flex-20 flex-center">
                  <span className="fa-layers fa-fw fa-xl">
                      <FontAwesomeIcon icon={faSquare} className="light-incoming" />
                      <FontAwesomeIcon icon={faSackDollar}
                          inverse
                          transform="shrink-8"
                          className="incoming" />
 
                  </span>
              </div>
              <div className="item-info flex-60">
                  <h2>PayRoll</h2>
                  <small className="expense-date">01/09/25</small>
 
              </div>
              <div className="item-cost flex-20 income fa-3x flex-center">
                  <span>&#43; $2500</span>
                  <FontAwesomeIcon icon={faArrowUpLong} className="m-left-20" />
              </div>
 
          </div>  */

/* item */

/* {/* <div className="item-container">
              <div className="item-icon fa-4x flex-20 flex-center">
                  <span className="fa-layers fa-fw fa-xl">
                      <FontAwesomeIcon icon={faSquare} className="light-electricity" />
                      <FontAwesomeIcon icon={faGlassWater}
                          inverse
                          transform="shrink-9 right-1"
                          className="bill" />
                          <FontAwesomeIcon icon={faBurger}
                          inverse
                          transform="shrink-10 down-1 left-1"
                          className="electricity" />
 
                  </span>
              </div>
              <div className="item-info flex-60">
                  <h2>Burguer</h2>
                  <small className="expense-date">01/09/25</small>
 
              </div>
              <div className="item-cost flex-20 income fa-3x flex-center">
                  <span>&#43; $10</span>
                  <FontAwesomeIcon icon={faArrowDownLong} className="m-left-20" />
              </div> */

/* </div>  */


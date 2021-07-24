import React from 'react'

export const Navbar = ({filterItem,menuList}) => { //prop passed
    return (
        <>
          <nav className="navbar">
            <div className="btn-group">
                {
                    menuList.map((curElem)=>{
                        return(
                            <button className="btn-group__item" onClick={()=>filterItem(curElem)}>{curElem}</button>
                        )
                    })
                }
            
            </div>
        </nav>  
        </>
    )
}
export default Navbar
{/* <button className="btn-group_item" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
            <button className="btn-group_item" onClick={()=>filterItem("Lunch")}>Lunch</button>
            <button className="btn-group_item" onClick={()=>filterItem("Evening")}>Evening</button>
            <button className="btn-group_item" onClick={()=>filterItem("Dinner")}>Dinner</button> */}
            {/* <button className="btn-group_item" onClick={()=>setMenuData(Menu)}>All</button> */}


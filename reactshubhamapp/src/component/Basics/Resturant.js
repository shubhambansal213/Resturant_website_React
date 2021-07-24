import React,{useState} from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './MenuCard';
import { Navbar } from './Navbar';

const uniqueList= [
    ...new Set(Menu.map((curElem)=>{
    return curElem.category;
}
)
),"All",
]
console.log(uniqueList)

const Resturant=()=>{  {/*hum export yaha per likh sakte hai*/}
    const [menuData,setMenuData]=useState(Menu); {/*hum React.useState aise bhi kar sakte hai*/}
    const [menuList,setMenulist]=useState(uniqueList)
    // console.log(menuData,setMenuData)
    const filterItem=(category)=>{
        // {/*filter iseliye dala kyuki array hai */}
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter((curElem)=>{
            return curElem.category==category;
        })
        setMenuData(updatedList); {/*1:25:53 flow samajna jaruri hai*/}
    };

    return(
        <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/> {/*yaha menu dataDta attribute ki taraf or phir props diya hai*/}
        
        </>
        // {/*props passed eg->{menuData} */}
    )
}
export default Resturant;
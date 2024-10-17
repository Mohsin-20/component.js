

import HeaderStyle from"./header.module.css"
const Header = (props:any) => {
console.log(props.abc)
    return (

    <div className={HeaderStyle.h1}>
    <h1 >this is  header component</h1>
    <h2>this is 2 header</h2>
    <h3>this is a 3 header</h3>  
    </div>
  )
}

export default Header;

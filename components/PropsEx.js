function PropsEx(props) {
  return (
    <p>The name provided to me was: {props.name}</p>
  );
}

export default PropsEx;

/**
<PropsEx name="Zack"/>

let names = ["Zack", "Kelly", "Charles"];
let l = [];
for (var i = 0; i < names.length; i++) {
  l.push(<PropsEx name={names[i]}/>);
}

{l}
*/

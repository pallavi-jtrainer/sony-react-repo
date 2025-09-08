import ComponentB from "./ComponentB";

// export default function ComponentA(props) {
//     return (
//         <div>
//             <ComponentB name={props.name} />
//         </div>
//     )
// }

export default function ComponentA() {
    return (
        <div>
            <ComponentB />
        </div>
    )
}

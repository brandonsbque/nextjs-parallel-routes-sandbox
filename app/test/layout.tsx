export default async function Layout(props: {
    children: React.ReactNode;
    middle: React.ReactNode;
    right: React.ReactNode;
}) {
    return (
        <div className="grid grid-cols-3 gap4">
            {props.children}
            {props.middle}
            {props.right}
        </div>
    )
}
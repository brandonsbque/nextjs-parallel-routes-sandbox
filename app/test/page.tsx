export default async function TestPage() {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const value = Math.random();
    
    return (
        <div className="h-screen">
            <p>LEFT {value}</p>
        </div>
    );
}
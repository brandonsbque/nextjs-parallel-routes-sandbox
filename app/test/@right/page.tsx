export default async function Right() {
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const value = Math.random();

    return <div className="bg-blue-400 h-screen">RIGHT {value}</div>
}
export default async function Middle() {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    const value = Math.random();

    return <div className="bg-red-400 h-screen">MIDDLE {value}</div>
}
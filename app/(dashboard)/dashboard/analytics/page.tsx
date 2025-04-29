import Link from 'next/link'
import React from 'react'

const Analytics = () => {
    return (
        <>
            <div className="text-3xl font-bold underline">Analytics</div>
            <ul>
                <li>
                    <Link href={"/Dashboard/Analytics/1"}>Analytics 1</Link>
                </li>
                <li>
                    <Link href={"/Dashboard/Analytics/2"}>Analytics 2</Link>
                </li>
                <li>
                    <Link href={"/Dashboard/Analytics/3"}>Analytics 3</Link>
                </li>
                <li>
                    <Link href={"/Dashboard/Analytics/4"}>Analytics 4</Link>
                </li>
                <li>
                    <Link href={"/Dashboard/Analytics/5"}>Analytics 5</Link>
                </li>
                <li>
                    <Link href={"/Dashboard/Analytics/6"}>Analytics 6</Link>
                </li>
                <li>
                    <Link href={"/Dashboard/Analytics/7"}>Analytics 7</Link>
                </li>
            </ul>
        </>
    )
}

export default Analytics
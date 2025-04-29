import Link from 'next/link';
import React from 'react'

function Users() {
    return (
        <>
            <div className="text-3xl font-bold underline">Users</div>
            <ul>
                <li>
                    <Link href={"/dashboard/users/1"}>John Doe 1</Link>
                </li>
                <li>
                    <Link href={"/dashboard/users/2"}>John Doe 2</Link>
                </li>
                <li>
                    <Link href={"/dashboard/users/3"}>John Doe 3</Link>
                </li>
                <li>
                    <Link href={"/dashboard/users/4"}>John Doe 4</Link>
                </li>
                <li>
                    <Link href={"/dashboard/users/5"}>John Doe 5</Link>
                </li>
                <li>
                    <Link href={"/dashboard/users/6"}>John Doe 6</Link>
                </li>
                <li>
                    <Link href={"/dashboard/users/7"}>John Doe 7</Link>
                </li>
            </ul>
        </>
    )
}

export default Users;
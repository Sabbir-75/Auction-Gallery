import React, { useEffect, useState } from 'react';
import Table from './Table';

const Tables = ({favoriteHandler}) => {

    const [tables, setTables] = useState([])

    useEffect(() => {
        fetch("Auction.json")
            .then(res => res.json())
            .then(data => setTables(data))
    }, [])


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-lg text-black font-normal'>Items</th>
                            <th className='text-lg text-black font-normal'>Current Bid</th>
                            <th className='text-lg text-black font-normal'>Time Left</th>
                            <th className='text-lg text-black font-normal'>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tables.map(table => <Table key={table.id} table={table} favoriteHandler={favoriteHandler}></Table>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tables;
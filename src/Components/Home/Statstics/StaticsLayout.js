import React from 'react';

function StaticsLayout({part1, part2}) {
    return (
        <section>
            <div className="mx-auto  px-0.5 py-8">
                <ul className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <li>
                        <li>
                            <div className="group relative block">
                                {part1}
                            </div>
                        </li>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <li>
                            <div className="group relative block h-full px-10">
                                {part2}
                            </div>
                        </li>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default StaticsLayout;

import { Wire_One } from 'next/font/google';

const wire_one = Wire_One({
    subsets: ['latin'],
    weight: ['400']
});

const StickyHeader = () => {
    return (
        <div id="sticky-header" className="sticky-header">
            <div id="logo" className={`${wire_one.className} text-3xl xl:text-5xl`}>
                <span className="text-nowrap font-semibold">ADR|BRODZ</span>
            </div>
        </div>
    )
}

export default StickyHeader;
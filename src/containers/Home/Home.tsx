import React from 'react';
import Popular from "../../components/Popular/Popular";
import Pizza from "../../components/Pizza/Pizza";
import Combo from "../../components/Combo/Combo";
import Snacks from "../../components/Snacks/Snacks";
import Sweets from "../../components/Sweets/Sweets";
import Drinks from "../../components/Drinks/Drinks";
import {Slider,CarouselItem} from "../../components/Slider/Slider";

const Home = () => {
    const items = [
        {id:134121,src:"https://sun9-62.userapi.com/impg/7P5T4nk2x5O_1I1Ath-146r8VMMk0SJYtr9FfQ/Ck_PKHeOvzg.jpg?size=807x807&quality=96&sign=2ebb4f07dc2a4bc4293a0bea3792928c&c_uniq_tag=XaqTw95G7ipAK0IUTpG12YLomwWPtBTQwAmOYRd-xN8&type=album"},
        {id:452,src:"https://cdn.dodopizza.info/files/marketing/sources/RUPromoMoscow1.jpg" },
        {id:6653,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWdDkZl2N4NBlrSM-4kEEfxjonSgV3BGN7ig&usqp=CAU"},
        {id:23543,src:"https://cdn.dodopizza.info/files/marketing/sources/RUShipping1.jpg"},
        {id:25343,src:"https://cdn.dodopizza.info/files/marketing/sources/RUOkko1.jpg"},
        {id:334,src:"https://dodofranchise.ru/images/franchise-ru/fire-pizza-delivery1.jpg"},
    ]

    return (
        <div style={{overflow:'hidden'}}>
            {items && <Slider
                items={items}
                renderItem={({ item, isSnapPoint }) => (
                    <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
                        <img style={{overflow:"hidden",borderRadius:'20px',}} width="250" height="250" src={item.src} alt="" />
                    </CarouselItem>
                )}
            />}
            <Popular />
            <Pizza />
            <Combo />
            <Snacks />
            <Sweets />
            <Drinks />
        </div>
    );
};

export default Home;
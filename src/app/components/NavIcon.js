import React from 'react';

class NavIcon extends React.Component {
    render() {
        let icons = Object.values(this.props);
        let icon = icons[0];
        console.log(icon); 
        switch (icon) {
            case 'FlowerIcon':
                return <FlowerIcon/>
            case 'StadiumIcon':
                return <StadiumIcon/>
            case 'CartIcon':
                return <CartIcon/>
            case 'SpoonIcon':
                return <SpoonIcon/>
        }
        return (
    
            <div> </div>
        )
    }
}

const FlowerIcon = () => {
    return (
        <svg id='flower-icon' className="nav-icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 75'>
    <rect className='st0' x='0' y='0' width='75' height='75' />
    <path className='st1' widht='75' height='75'd='M2,0h71c1.1,0,2,0.9,2,2v71c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V2C0,0.9,0.9,0,2,0z'
    />
    <rect x='17.5' y='17.1' transform='rotate(-14.999 37.49 37.12)' className='st0'
    width='40' height='39.9' />
    <path className='st2' d='M50,38.8c4,2.4,6.1,6.1,4.8,8.3c-1.3,2.3-5.6,2.3-9.6,0c1.1,4.5,0,8.6-2.5,9.3c-2.5,0.7-5.5-2.3-6.8-6.8	c-2.4,4-6.1,6.1-8.3,4.8c-2.3-1.3-2.3-5.6,0-9.6c-4.5,1.1-8.6,0-9.3-2.5c-0.7-2.5,2.3-5.5,6.8-6.8c-4-2.4-6.1-6.1-4.8-8.3	c1.3-2.3,5.6-2.3,9.6,0c-1.1-4.5,0-8.6,2.5-9.3c2.5-0.7,5.5,2.3,6.8,6.8c2.4-4,6.1-6.1,8.3-4.8c2.3,1.3,2.3,5.6,0,9.6	c4.5-1.1,8.6,0,9.3,2.5C57.5,34.5,54.5,37.5,50,38.8z'
    />
    <path className='st2' d='M38.9,42.4c2.9-0.8,4.6-3.8,3.9-6.7c-0.8-2.9-3.8-4.6-6.7-3.9c-2.9,0.8-4.6,3.8-3.9,6.7	C33,41.4,36,43.2,38.9,42.4z'
    />
</svg>
    )
}
const StadiumIcon = () => {
    return (
        <svg id='stadium-icon' className="nav-icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 75'>
            <rect x='0' y='0' className='st0' width='75' height='75' />
            <path className='st1' d='M37.5,34C51,34,62,32,62,29.5S51,25,37.5,25S13,27,13,29.5S24,34,37.5,34z'
            />
            <path className='st1' d='M34,52.1v-10c0,0,2.5-2.1,4-2.1s4,2.1,4,2.1v10'
            />
            <path className='st1' d='M21,50.1v-9c0,0,2.5-2.1,4-2.1s4,2.1,4,2.1v10'
            />
            <path className='st1' d='M46,51.1v-10c0,0,2.5-2.1,4-2.1s4,2.1,4,2.1v9'
            />
            <path className='st1' d='M58,50.1v-12c0,0,2.5-2.1,4-2.1' />
            <path className='st1' d='M13,36c1.5,0,4,2.1,4,2.1v12' />
        </svg>
    )
}
const CartIcon = () => {
    return (
        <svg id='cart-icon' className="nav-icon" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 75'>
            <rect x='0' y='0' className='st0' width='75' height='75' />
            <path className='st1' d='M18,20.5h7.6l7.1,25l18.4,0l6.6-17.2L28,28.5'
            />
            <path className='st1' d='M30,37.5h25' />
            <path className='st2' d='M35.5,55.5c1.9,0,3.5-1.6,3.5-3.5c0-1.9-1.6-3.5-3.5-3.5S32,50.1,32,52C32,53.9,33.6,55.5,35.5,55.5z'
            />
            <path className='st2' d='M48.5,55.5c1.9,0,3.5-1.6,3.5-3.5c0-1.9-1.6-3.5-3.5-3.5S45,50.1,45,52C45,53.9,46.6,55.5,48.5,55.5z'
            />
            <path className='st1' d='M36,28.5V45' />
            <path className='st1' d='M49,28.5V45' />
    </svg>
    )
}
const SpoonIcon = () => {
    return (
        <svg id="spoon-icon" className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
            <rect x="0" y="0" className="st0" width="75" height="75" />
            <path className="st1" d="M35.7,44.4l11.2,11.7l3-3.3L31.1,33.3" />
            <path className="st1" d="M31,34.4c3.3-3.3,2.5-9.3-1.6-13.5c-4.2-4.2-10.2-4.9-13.5-1.6c-3.3,3.3-2.5,9.3,1.6,13.5	C21.7,36.9,27.8,37.7,31,34.4z"
            />
            {/* <rect x="14.9" y="24.1" transform="rotate(-45.001 39.01 37.71)" className="st0"
            width="48.3" height="27.2" /> */}
            <path className="st1" d="M37.2,44.1L25.9,55.8l-3-3.3l17.2-18" />
            <path className="st1" d="M61.3,25.8c-15.8,15.8-17.8,12.5-21,9.2c-3.3-3.3-6.6-5.2,9.2-21"
            />
            <path className="st1" d="M56.7,22L42.2,36.5" />
            <path className="st1" d="M52.8,18L38.3,32.5" />
        </svg>
    )
}





export default NavIcon
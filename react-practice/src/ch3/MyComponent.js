import PropTypes from 'prop-types';
const MyComponent = ({name, number, children}) => {
    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다.
            <br />
            제 자식의 이름은 {children} 입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: "기본이름"
};
MyComponent.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired
};
export default MyComponent;

// import { Compnent } from 'react';
// import PropTypes from 'prop-types';

// class MyComponent extends Compnent{
//     render() {
//         const { name, number, children } = this.props;
//         return (
//             <div>
//                 안녕하세요, 제 이름은 {name} 입니다.<br />
//                 children의 값은 {children} 이며,<br />
//                 number는 {number} 입니다.
//             </div>
//         )
//     };
// }
// MyComponent.defaultProps = {
//     name:'기본 이름'
// }
// MyComponent.PropTypes = {
//     name: PropTypes.string,
//     number:PropTypes.number.isRequired
// }
// export default MyComponent;
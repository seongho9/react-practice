import { useState } from "react";

const EvnetPracticeFunc = () => {
    const [info, setInfo] = useState({
        username: "",
        message: ""
    });
    const onChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    }
    const onClick = (e) => {
        alert(info.username + " " + info.message);
        setInfo({
            username: "",
            message:""
        })    
    }
    return (
        <div>
            <h1>event practice</h1>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={info.username}
                onChange={onChange} />
            <input
                type="text"
                name="message"
                placeholder="message"
                value={info.message}
                onChange={onChange}
                onKeyPress={onKeyPress} />
            <button
                type="button"
                onClick={onClick}>
                확인
            </button>
        </div>
    )
}
export default EvnetPracticeFunc;
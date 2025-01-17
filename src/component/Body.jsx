import { useState } from "react";

export default function Body() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [birth, setBirth] = useState("");
    const [bio, setBio] = useState("");

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeGender = (event) => {
        setGender(event.target.value);
    };

    const onChangeBirth = (event) => {
        setBirth(event.target.value);
    };

    const onChangeBio = (event) => {
        setBio(event.target.value);
    };

    return (
        <div>
            <div>
                <input
                    value={name}
                    onChange={onChangeName}
                    placeholder="이름"
                />
            </div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option value=""></option>
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                </select>
            </div>
            <div>
                <input
                    type="date"
                    value={birth}
                    onChange={onChangeBirth}
                />
            </div>
            <div>
                <textarea
                    value={bio}
                    onChange={onChangeBio}
                    placeholder="자기소개"
                />
            </div>
            <h1>
                {name}은(는) {count % 2 === 0 ? "커플" : "솔로"}입니다.
            </h1>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

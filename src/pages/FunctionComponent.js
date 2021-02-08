import React, {
    useState,
    useEffect
} from "react";
export function FunctionComponent(props) {
    const [date, setDate] = useState(new Date());
    useEffect(() => { //副作用
        // 相当于componentDidMount，componentWillUnmount的集合
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timer); //组件卸载的时候执行
    }, []);
    // 依赖项是一个空数组，防止useEffect一直执行
    return ( < div >
        <h3 > FunctionComponent < /h3>
            <p > {
                date.toLocaleTimeString()
            } < /p> 
        </div>
    );
}
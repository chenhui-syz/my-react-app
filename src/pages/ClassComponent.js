import React, {
    Component
} from "react";
export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        // 使用state属性维护状态，在构造函数中初始化状态
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        // 组件挂载之后启动定时器器每秒更更新状态


        this.timerID = setInterval(() => {
            // 使⽤用setState⽅方法更更新状态
            this.setState({
                date: new Date()
            });
        }, 1000);
    }
    componentWillUnmount() {
        // 组件卸载前停⽌止定时器器
        clearInterval(this.timerID);
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    render() {
        return <div > {
            this.state.date.toLocaleTimeString()
        } < /div>;
    }
}
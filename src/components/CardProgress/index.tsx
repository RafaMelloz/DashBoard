import { ConfigProvider, Flex, Progress } from "antd"
import "./styles.css"




export const CardProgress = (props: { text: string, number: string, status: boolean }) => {


    return (

        <>
            <ConfigProvider
                theme={{
                    components: {
                        Progress: {
                            
                            defaultColor: props.status ? "#0acd19" : "#db2505",
                            circleTextColor: props.status ? "#0acd19" : "#db4905",
                            circleTextFontSize:'2rem',
                            remainingColor:'#181C28'
                        },
                    },
                }}
            >
                <div className="card">
                    <div className="content__circle">
                        <Flex align="center" gap="small">
                            <Progress type="circle" percent={parseInt(props.number)} size={70} />
                        </Flex>

                    </div>
                    <span className="description__card">{props.text}</span>
                </div>
            </ConfigProvider>
        </>
        
    )
}
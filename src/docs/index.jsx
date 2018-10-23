import React from "react";
import {render} from "react-dom";
import CountdownTimer from "../../lib";
import "./styles.css";

function endFunction() {
    console.log()
}

function Demo() {
    return (
        <div className="count-down-react-box">
            <div className="count-down-react">
                <h1>Demo of the count down timer react</h1>
                <div className="title">Base</div>
                <div style={{textAlign: 'center'}}><CountdownTimer count={5432}/></div>
                <pre>
            <code>
                {'<CountdownTimer count={5432} />'}
            </code>
        </pre>
                <div className="title">Size</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer count={5432} size="small"/>
                    <CountdownTimer count={5432} size="middle"/>
                    <CountdownTimer count={5432} size="large"/>
                    <CountdownTimer count={5432} size="big"/>
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={5432} size="small" />\n' +
                '<CountdownTimer count={5432} size="middle"/>\n' +
                '<CountdownTimer count={5432} size="large" />\n' +
                '<CountdownTimer count={5432} size="big" />'}
            </code>
        </pre>
                <div className="title">border</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer count={5432} border/>
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border />'}
            </code>
        </pre>
                <div className="title">border & noPoints</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer count={5432} border noPoints/>
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border noPoints />'}
            </code>
        </pre>
                <div className="title">border & showTitle</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer count={5432} border showTitle/>
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border showTitle />'}
            </code>
        </pre>
                <div className="title">border & showTitle & noPoints</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer count={5432} border showTitle noPoints/>
                </div>
                <pre>
            <code>
                {' <CountdownTimer count={5432} border showTitle noPoints />'}
            </code>
        </pre>
                <div className="title">border & showTitle & direction</div>
                <div style={{textAlign: 'center', margin: '0 auto', width: '160px'}}>
                    <CountdownTimer count={5432} border showTitle noPoints direction="left"/>
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border showTitle noPoints direction="left"/>'}
            </code>
        </pre>
                <div className="title">border & showTitle & responsive</div>
                <CountdownTimer count={5432} border showTitle responsive/>
                <CountdownTimer count={5432} responsive showTitle/>
                <CountdownTimer count={5432} border responsive/>
                <CountdownTimer count={5432} border responsive noPoints/>
                <CountdownTimer count={5432} responsive/>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border showTitle responsive />\n' +
                '<CountdownTimer count={5432} responsive showTitle />\n' +
                '<CountdownTimer count={5432} border responsive />\n' +
                '<CountdownTimer count={5432} border responsive noPoints />\n' +
                '<CountdownTimer count={5432} responsive />'}
            </code>
        </pre>
                <div className="title">Color</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer count={264} showTitle border noPoints color="#27bf65"/>
                    <CountdownTimer count={264} showTitle noPoints color="#f79232"/>
                    <CountdownTimer count={5432} border showTitle responsive color="#0282b8"/>
                    <CountdownTimer count={5432} showTitle responsive color="#ff546a"/>
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={264} showTitle border noPoints color="#27bf65" />\n' +
                '<CountdownTimer count={264} showTitle noPoints color="#f79232" />\n' +
                '<CountdownTimer count={5432} border showTitle responsive color="#0282b8"/>\n' +
                '<CountdownTimer count={5432} showTitle responsive color="#ff546a" />'}
            </code>
        </pre>
                <div className="title">Background Color</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer count={264} showTitle border noPoints backgroundColor="#27bf65"/>
                    <CountdownTimer count={279264} showTitle border noPoints backgroundColor="#0282b8"/>
                    <CountdownTimer count={264} showTitle border noPoints backgroundColor="#e6e46f"/>
                    <CountdownTimer count={264} showTitle border noPoints backgroundColor="#ff546a"/>
                    <CountdownTimer count={5432} border showTitle responsive size="small" color="#fff"
                                    backgroundColor="#27bf65"/>
                    <CountdownTimer count={5432} border showTitle responsive color="#fff" backgroundColor="#0282b8"/>
                    <CountdownTimer count={5432} border showTitle responsive size="large" color="#fff"
                                    backgroundColor="#e6e46f"/>
                    <CountdownTimer count={5432} border showTitle responsive size="big" color="#fff"
                                    backgroundColor="#ff546a"/>
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={264} showTitle border noPoints backgroundColor="#27bf65"/>\n' +
                '<CountdownTimer count={279264} showTitle border noPoints backgroundColor="#0282b8"/>\n' +
                '<CountdownTimer count={264} showTitle border noPoints backgroundColor="#e6e46f"/>\n' +
                '<CountdownTimer count={264} showTitle border noPoints backgroundColor="#ff546a"/>\n' +
                '<CountdownTimer count={5432} border showTitle responsive size="small" color="#fff" backgroundColor="#27bf65"/>\n' +
                '<CountdownTimer count={5432} border showTitle responsive color="#fff" backgroundColor="#0282b8"/>\n' +
                '<CountdownTimer count={5432} border showTitle responsive size="large" color="#fff" backgroundColor="#e6e46f"/>\n' +
                '<CountdownTimer count={5432} border showTitle responsive size="big" color="#fff" backgroundColor="#ff546a"/>'}
            </code>
        </pre>
                <div className="title">Hide Day</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer count={5432} border showTitle size="small" hideDay/>
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border showTitle hideDay />'}
            </code>
        </pre>
                <div className="title">Hide Day & Hide Hours</div>
                <div style={{textAlign: 'center'}}>
                    <CountdownTimer
                        count={5432}
                        showTitle
                        border
                        size="small"
                        hideDay
                        hideHours
                        noPoints
                    />
                </div>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border showTitle hideDay />'}
            </code>
        </pre>
                <div className="title">Title</div>
                <CountdownTimer count={5432} border showTitle responsive size="small" dayTitle="D" hourTitle="H"
                                secondTitle="S" minuteTitle="M"/>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border showTitle responsive size="small" dayTitle="D" hourTitle="H" secondTitle="S" minuteTitle="M"/>'}
            </code>
        </pre>
                <div className="title">End Event Function</div>
                <CountdownTimer count={5432} border showTitle responsive size="small" onEnd={endFunction()}/>
                <pre>
            <code>
                {'<CountdownTimer count={5432} border showTitle responsive size="small" onEnd={endFunction()}/>'}
            </code>
        </pre>
            </div>
        </div>
    );
}

render(<Demo/>, document.getElementById("app"));

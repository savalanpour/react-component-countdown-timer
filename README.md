# React component Count Down Timer

This is a simple count down timer react component.

### Demo

The demo app source code lives inside the `src/docs` folder. 

## [Documentation](http://react-slick.neostack.com)

### Installation

**npm**

```bash
npm install count-down-timer --save
```

⚠️ Also install count-down-timer for css

```bash
@import "~count-down-timer/lib/styles.css";
```


### Example

```js
import React from "react";
import CountDownTimer from "count-down-timer";

class SimpleCountDownTimer extends React.Component {
  render() {
    var settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true,
    };
    return (
      <CountDownTimer {...settings} />
    );
  }
}
```


OR


```js
import React from "react";
import CountDownTimer from "count-down-timer";

class SimpleCountDownTimer extends React.Component {
  render() {
    return (
      <CountDownTimer count={5432} border showTitle noPoints />
    );
  }
}
```




### Common API

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| className | string | `''` | Additional CSS class for the root DOM node |
| count | number | `0` | The count value of the timer base on second |
| border | boolean | `false` | If the value is `true`, it means a count-down-timer has a border |
| showTitle | boolean | `false` | If the value is `true`, it means a count-down-timer has a title top of each section |
| direction | `right` or `left` | `right` | Value to be added or subtracted on each step the slider makes. Must be greater than zero, and `max` - `min` should be evenly divisible by the step value. <br /> When `marks` is not an empty object, `step` can be set to `null`, to make `marks` as steps. |
| noPoints | boolean | `false` | If vertical is `true`, the count-down-timer will be `:` between each section . |
| color | string | `#000` |  |
| backgroundColor | string | `#fff` |  |
| responsive | boolean | `false` | If `true`, with is responsive. |
| size | `small` or `middle` or `large` or `big` | `middle` |  |
| responsive | boolean | `false` | If `true`, with is responsive. |
| hideDay | boolean | `false` | If `true`, hide day. |
| hideHours | boolean | `false` | If `true`, hide hours . |
| dayTitle | string | `Day` |  |
| hourTitle | string | `Hour` |  |
| minuteTitle | string | `Min` |  |
| secondTitle | string | `Sec` |  |
| onEnd | Function | () => {} | |

## License

`count-down-timer` is released under the MIT license.
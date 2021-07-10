import * as React from "react"
import { View } from 'react-native';
import Svg, { G, Circle, Path } from "react-native-svg"

function svgLogo(props) {
  return (
    <View style={{ aspectRatio: 1 }}>
        <Svg
        viewBox="77.506 47.218 344.989 405.563"
        preserveAspectRatio="xMinYMin slice" 
        width="85.064219369123909232351077391182%"
        height="100%"
        {...props}
        >
        <G transform="matrix(1.1638 0 0 1.15566 -40.948 11.137)">
            <G transform="translate(.474 -22.906)">
            <Circle
                cx={250}
                cy={250}
                r={125.69}
                transform="matrix(1.0621 0 0 1.03343 -15.523 -8.359)"
                fill="#ffd500"
            />
            <Path
                d="M397.744 282.386c0 88.789-107.356 122.678-151.064 122.678-43.707 0-145.371-29.811-145.371-124.423 0-94.614 103.396-82.736 147.103-82.736 43.708 0 149.332-4.306 149.332 84.481zM267.208 163.287c-1.774 10.473-4.145-23.966-13.592-28.821-6.259-3.217-10.178 17.061-16.242 13.489-14.791-8.711 76.801 9.893-30.856-41.228-11.25-5.342-50.359-10.714-23.496-38.657 26.001-27.046 63.154-11.866 78.301 20.894 10.43 22.557 10.035 49.82 5.885 74.323z"
                fill="#ffd500"
            />
            <Path
                d="M246.447 131.53c-6.398-.046 14.069-4.085 16.316-9.31 1.489-3.463-10.934-3.8-9.219-7.193 4.184-8.272-.55 40.055 22.54-19.15 2.413-6.187 2.893-26.612 21.516-15.18 18.025 11.065 11.532 31.295-7.035 41.724-12.784 7.182-29.146 9.218-44.118 9.11z"
                fill="#ffd500"
            />
            </G>
            <G transform="matrix(.8554 0 0 .83069 36.15 -18.552)">
            <Path
                d="M310.822 310.665c-20.747 0-43.861-33.724-39.193-34.635 26.671-5.205 26.56-15.162 38.092-30.198 8.359-10.899 25.181-18.821 38.325-11.122 15.259 8.938 14.837 25.472 14.837 34.593 0 22.688-29.373 41.362-52.061 41.362zM189.178 310.665c20.747 0 43.86-33.724 39.193-34.635-26.671-5.205-26.56-15.162-38.092-30.198-8.36-10.9-25.181-18.821-38.325-11.122-15.26 8.938-14.837 25.472-14.837 34.593 0 22.688 29.373 41.362 52.06 41.362z"
                fill="#7800c7"
                strokeWidth={9.128}
                stroke="#7800c7"
            />
            </G>
            <G transform="matrix(.85926 0 0 .8653 35.185 2.478)">
            <Path
                d="M276.285 242.434c-36.177-6.938-29.746-29.792-9.982-34.74 32.436-8.121 36.358-33.022 58.659-36.127"
                stroke="#7800c7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                strokeWidth={10}
            />
            <Path
                d="M223.715 242.434c36.177-6.938 29.746-29.792 9.982-34.74-32.436-8.121-36.358-33.022-58.66-36.127"
                stroke="#7800c7"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                strokeWidth={10}
            />
            </G>
            <G transform="translate(0 13.968)">
            <Path
                d="M319.138 250c0 7.333-2.95 14.399-8.014 20.423-5.049 6.006-12.155 11.071-20.705 14.964-4.016 10.374-9.669 18.791-16.568 24.901-6.917 6.127-15.19 9.731-23.851 9.731s-16.934-3.604-23.851-9.731c-6.899-6.11-12.558-14.694-16.568-24.901-8.715-3.912-15.656-8.958-20.705-14.964-5.064-6.024-8.014-13.09-8.014-20.423 0-9.322 4.369-14.317 9.917-17.974 5.53-3.645 12.19-6.145 17.645-11.029 2.31-5.426 5.259-9.971 8.796-13.787.775-1.401 2.082-2.566 3.799-3.607 8.155-6.802 18.527-10.112 29.568-10.112 11.631 0 22.269 3.712 30.345 11.227 2.94 1.798 4.899 4.007 5.683 6.589 2.624 3.767 4.764 8.032 6.442 13.017 4.676 5.168 10.934 8.382 16.265 11.962 5.345 3.59 9.816 7.663 9.816 13.714z"
                stroke="#7800c7"
                fill="#ffd500"
                strokeWidth={8.623}
            />
            <Path
                d="M183.442 259.797s-4.773-21.743 30.492.796c29.884 19.099 44.312 15.155 69.729-.796 34.647-21.743 33.102.428 33.102.428"
                fill="none"
                stroke="#7800c7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={10}
            />
            </G>
        </G>
        </Svg>
    </View>
  )
}

export default svgLogo

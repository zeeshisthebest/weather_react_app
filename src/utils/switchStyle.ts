import { styled } from "@mui/material/styles";
import Switch, { switchClasses } from "@mui/material/Switch";

const pxToRem = (px: number, oneRemPx = 17) => `${px / oneRemPx}rem`;

export const SwitchAirbnb = styled(Switch)(({ theme }) => {
    const borderWidth = 2;
    const width = pxToRem(29);
    const height = pxToRem(15);
    const size = pxToRem(10);
    const gap = (15 - 10) / 2;
    const primaryColor = "#60A29B";
    const thumbOn = "#333";
    return {
        width,
        height,
        padding: 0,
        margin: theme.spacing(1),
        overflow: "unset",
        [`& .${switchClasses.switchBase}`]: {
            padding: pxToRem(gap),
            [`&.${switchClasses.checked}`]: {
                color: "#fff",
                transform: `translateX(calc(${width} - ${size} - ${pxToRem(2 * gap)}))`,
                [`& + .${switchClasses.track}`]: {
                    backgroundColor: "#aaf",
                    opacity: 1,
                    border: "solid #fff",
                    borderWidth,
                },
                [`& .${switchClasses.thumb}`]: {
                    backgroundColor: "#fff",
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 24 24" width="10"><path d="M0 0h24v24H0z" fill="none"/><path fill="${encodeURIComponent(
                        thumbOn
                    )}" d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>')`,
                },
            },
        },
        [`& .${switchClasses.disabled}`]: {
            [`& .${switchClasses.thumb}`]: {
                color: "#bdbdbd",
            },
            [`& + .${switchClasses.track}`]: {
                backgroundColor: "#000",
                opacity: 1
            },
        },
        [`& .${switchClasses.track}`]: {
            borderRadius: 40,
            backgroundColor: "#333",
            border: "solid #888",
            borderWidth,
            opacity: 1,
        },
        [`& .${switchClasses.thumb}`]: {
            width: size,
            height: size,
            boxShadow: "none",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="10" viewBox="0 0 24 24" width="10"><path fill="${encodeURIComponent(
                primaryColor
            )}" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        },
    };
});

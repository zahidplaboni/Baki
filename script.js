// ---------- আইকন (SVG) ও পতাকার ভিডিও: অবশ্যই ফাইলের শুরুতে (চালুর সময়েই লাগে) ----------
const ICON_FP = '<svg class="ic-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/></svg>';
const ICON_CALC = '<svg class="ic-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v4h10V4H7zm1.5 6.2a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM8.5 14a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM8.5 17.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zm3.5 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>';
const FLAG_MP4_B64 = 'AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAARXbW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAAE0YAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAA4F0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAE0YAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAKeVzwBwAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAABNGAAAAAAABAAAAAAL5bWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAA8AAABKABVxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACpG1pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAmRzdGJsAAAAwHN0c2QAAAAAAAAAAQAAALBhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAKgAcABIAAAASAAAAAAAAAABFUxhdmM2MC4zMS4xMDIgbGlieDI2NAAAAAAAAAAAAAAAGP//AAAANmF2Y0MBQsAe/+EAHWdCwB6mEQs/l//AZQBlRAAAAwAEAAADAHg8WLhGAQAGaMhCB0sgAAAAEHBhc3AAAAGUAAABlQAAABRidHJ0AAAAAAAAit4AAIreAAAAGHN0dHMAAAAAAAAAAQAAAEoAAAQAAAAAGHN0c3MAAAAAAAAAAgAAAAEAAAA3AAAAHHN0c2MAAAAAAAAAAQAAAAEAAABKAAAAAQAAATxzdHN6AAAAAAAAAAAAAABKAAAFgwAAAQ0AAAFcAAABXAAAAhAAAAAcAAABDwAAATEAAAFBAAACAQAAABwAAAD5AAABLAAAATcAAAG+AAAAEAAAARoAAAEjAAABOgAAAhMAAAAOAAAA+AAAARAAAAEeAAACDAAAAA8AAAEPAAAA+AAAAR0AAAI8AAAAIAAAAOoAAAETAAAA/gAAAicAAAAKAAABDQAAAREAAAEKAAAB3wAAABQAAADUAAABQwAAAUkAAAHxAAAAEgAAAUIAAAFNAAABKgAAAgQAAAASAAABDgAAAPIAAAEQAAADyAAAAAwAAACZAAAA5QAAAQoAAAIMAAAAGQAAAR8AAAFjAAABMwAAAdIAAAAQAAABEAAAAS8AAAE9AAAB6gAAABQAAADuAAABBgAAAP8AAAAUc3RjbwAAAAAAAAABAAAEhwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNjAuMTYuMTAwAAAACGZyZWUAAFWrbWRhdAAAAnMGBf//b9xF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNjQgcjMxMDggMzFlMTlmOSAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMjMgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0xNiBkZWJsb2NrPTE6MDowIGFuYWx5c2U9MHgxOjB4MTMxIG1lPXVtaCBzdWJtZT0xMCBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTI0IGNocm9tYV9tZT0xIHRyZWxsaXM9MiA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTMgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0wIHdlaWdodHA9MCBrZXlpbnQ9MjUwIGtleWludF9taW49MTUgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD02MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTMzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAMIZYiCF4jFAAEFGjgAFZ8FkSFLPFBSyo1QvdAM/wLT8Baoyq/1xekgfD/BKXbP7iv18bUmPktZ/ei37bfut9frxyG9jGGPuwAj+I9r9Mfp2+qx+qr9bskzLl1XLTvmP22xz9+40VX7qqpPNTy3tLCrueAZ/xVYjEfr8GBmn1/v0vz1zI58eVYvNlUutrQ+P5f//zXGw6tb939OLU+8MAXG/BJNx6BQXseNo+jsOIi83fn/q+ru3oqCp6rVVX/qu6VQLRWtAJ/BVh8ZKFHkBXxZh+C6jI5BoK6Wb6Ctf9Alr0d/KX1VpARitw7HKLfX4rX0Cki9/SqC1XXrXy2k+vrfoBH2/1H/WeCzXIwrBk+Baxk8Sq7lXGnl/DN+/+Xpaeq/nk4qtJVXUYVEV1V9Rqq9P0E31611z9VXY8Tr2kutDEVN4FnRtmaCPP/1PrjS93/Xja/TTr/SfnCPjc6YMzKOfmq61pxpuuvXRg/p4toE1ws5Et+myElU4Es0olHhfhzAZd89a6V+s+QWxwYFDgzHwmwadI6jrr/oERUuRZqorSddaYKtGD+nb6/o+rvBaVTZ0U/2afqd1p64W6rWqOxcQEytKiE9eBqhkhITYeOxYIRTiLy0MoHYGU5Z0FeX/VV19939pfdCUn/AjWQm289XvvZ/fxPJs+tRtBiwM8gZB6P/VPVoZmQM6ut9AMnbCzlyToxCLnXrX+NXvfv38RElFKnE666wWda/7df8/UYLb+hCofglEjj0a/nmx+SskU10W8cW9y5vv4HGLb8VANwCiXgLUUcTL+Iui5gSupDISLP28CqVgMQsJDGrrviOkaVL78uRuBBAfgMdLkDVnrHF4Rss2///RTiv1OdAkGV21XRv58IF36T9UY/TT//39ENiHOZCSDQor2uvOv1jnfX70geb/N80yLqqGoqR/xDnfS0Yr/p1Nxccd5q6lpdJ92vfJF7ddP7jlL0Q7eutV0v+O2ew7pkij/zpfCApfy53QDP9s6KHWUVNANKwTMzgwWCt6NP350zkvmAAAAEJQZocJ+C7+uH/BOr/1z9PL5PzaPFwRDGlW+o1vUUksc4VGrWubUJwjl+47+Csdrl4KAXHoDvmvb4qoIwr4kRd3fd+UEbWtP8NDNVRG/EIjHrmLPwWBXGQmWrawVyJVSSvkBFVdzyK4qr+Xqq2LFKuq+GH4zw5oBUgY78H2JhUNDEsvhl8aFvBEuY30rHXXFmMq1wLYfzfpMVWfChu7+IyysKM4Xd7voMmu7vjR/BiD/x/90CWk/UNVqqGWL4GqZkRE15hrJ8w2LDFV1VV4HBifxUs+osMOa4/1rWinS3337cNk3RRi12/RN1fCWvcEPhkVq8XXVarGoUfG1FgzFcEZ9D+CLqr6h4O8AAAAVhBmioN+D8Zp4z/Vx2MSLbHAeAdci+BxBfvoEY3fhGhDa6iMvxEbzltV18UHNYuit/wMs/cPI9Ab+m4d8oU1h8Ihx7u/4bj/jlf4y8NSXfmZQPST1UediefivfffjkFzVrVVTf0oTqPkymtCzWo+UX363+NrgUAQ1gx7wPgMIr2TwKgIlSr4QW7vZ7tV+uKB9UghACYVUU5twOgMTqv4LMRi/BevGn+bxIU8OBzwwtYwYBTDJ6/eO9ebCng9D/hEWa7/A4BX0F/QRJW/hsI+HQzvh+DnXwcUvAihcMjH3Tfc3hN+Tfn1WuwYD+vdCpn+IrBd8fC2BNHILPp/Tt+aKElVVVDrCdJ3+ExSr3vWOmCHgcBi2N34hBPwwCLc4H+e3/Cb89AGcOD2cJIGy8pKWQKtn4DiKwgmEfxyKl/bjtJKoScP/Of7cvmAtwNcPAZatrA9x8ElVqmGAAAAVhBmjsN+UcL6ieVa8LjP/hP4nJ+//+rn6vtb97sgQET5ua9K08Yk0548KK9LxBD18ut/mrDc9z8a78HAIj079f3o/R6AL+DP3wIQIvBj8FQezVoa1JK44tb3v6yfuHYQwLUOZkoqmug1fhXfr8EoXL1Xg++Cn4KASeVnph9VpuY1vLvD2PpOBUEscUa9proCqCGtbmIwhKuaKkNnAlhKsE4vHuG/Iq+y/Buffh+CE+7+8NjvAkDi938K+Gg8pU+Op/F9DKsdEoc75/it4fCsH++CqCLwXdagtn8RX4dnBBZk+TfPVViiowW+7D+K8ffCcX4VnoCP5qDjWT178CtL1XwnmYkVjGreGHxG+YzpUwLUEXfv1166+M8BBbwKc9AX+FMv3l2Giu7ukXlKls3y/fh4eCUt3fd0i7GglE7uovtrghzGq/hMLBIr6qtYhQpZXwuJgtbq9b3wAAAAgxBmkkDfYEUGRtYvT8N6X98NhfhBUl/SLsn18Pf4KF4OxZM+VrBeCGLYju8vWHkBdUZGGu1+EBgnVdV0jXmtnF0AhFeHbZmsFYsDKEw11Vf4BGyvy8CcCIMBAFCVRTqtecyd3x2ePqXVVilfgTQnl/mAtwmONd36A3AQtJ4M5CqvuDbHEZaNskE8JA0FXve+bVaG0C7AwWGrlhWAxK80ntrJYJTKOhkp/bXXr6r4h955QI5mT5V4JAEp4HVa8BmAKrJWngU8ZYd4aWqv8M2xpFtfgbQfp2b5Ykfrda5c9AuD2l4MhxM2a14reEmgQ06qX62UYxIEe6LWKjhpb8UBAJd+v+oCfZXfWF+vBYEWJvfgSw38EhKi9bbAyAfnDiVdHT6gun6t7hgLYuQJBzd7f4IVV7ZPS+X+Q/RCBAGIDeBxtyBsCeEha0kt34MmLdXVap8NBgEmtX+t1+ZVOqr9fBVTh4F1HGvBKk49Tajn6quwQX83+KKuNBl772nNcGoCECiphk3kaDoVwBBEF8DMIOZAd8BjkpP7AaoCiBM1X1VzbeAtPgEFAkeBhBgYzv7AVFB9H46i72M1TdAEXnCCEky8Jvw4Cl/ARoNz0IObeFwMaJSsp5/J7cgGAK+AVqCPWqVzKrVXbt4au+lvxv7bfNqu/qPgv167n9tvgIIBb9AOs5RSquT9vhHAsgxwAAAABhBmllBHMT9L/kenUTicKc19q8K4xX6tGQAAAELQZppgR5fjOFT/BSL+P18KfFeBGJ8V4Mxfi6vl/GYje9rmKL1d8tCXwuBU04C/A6HD4JN638NDgUGWt7u5eDsX8Sr9AmHffhX7NrD4NRwf8IQ63vrV3d2/x65WBaAqgkBX6sY99ZoT9gdQLXwt0EUcJpw8RfD9o+Cn4YN44wJKqt/QJPMz0CVfTlFOCo8E2IlS3BtyBUFHUPuq+jr8wSVfy+exe73/4Qnt+f344q+8EQLc84Tc95Mgq9eeXqup/i/F/iPB8q5VSBeGoP6t9avoFHaapWm6N68nr/AswKfYdAR2Xz/gmLvf9v+ieiVjA3wRCNb1rEIqWqJy49TX7JDwChhXHsocB+4/++AAAABLUGaecN64wP/BSJ0T4I7vaTKTypL4yK/PTD+XUvH/X/QO4gdPne94EwJT6ULAepfGAo177kBdgdgz1dAd8DfGX5jc1M1uVCNKCXVer4tXPBUEvDHx4nmgYt5IdEghFvd2N8aeKM97u7zKp1UVPHoxY3rdpdaWO/hD4Fsf5OsHv83wQBBX34LDMU99+T1Gm7vF4djS4ycISzHNcVDudnXl+F4J1qtb064/Wdb8wIjjEClfCZZtMebfOkBv8loO1/XgSQ78Paw7OGfCnsH/xb16mHar/r+NDQTd/gCH0Q7C7sV+xVA768Bs26eNEQ+FRFd/0XwuOyelNBF/0AWIOYhx65oBGAbmJWv5ROquo389OvFry+cngW+uCX3cd44goNPe0bAhAbQ9jYsCadTolUAAAE9QZqIgEfhYMa8Kn8Oj1fyflvjvfwQjdYcyezFu/wqiVXrPCA8pnv4b+DU+/v7Nfe9m/B8T4mnx1ZfxnCXL/Xmu+ngVwt7sZAQ/lB6Hin1X56Iv4somxeCwOex2uiiA4r3LBgU/FDgVePKsM4OVbwcPeP+ngSBnMPs9awosKXvr7w2MWtP8zEzHxPhuxeqyfzf//QEecyEoy+TAoJjzbsCId8C9/FlbHwPo2sP/jD0JSf8BC+he2k9JHHhyJgaPHJhZ82X/gm9+OMbqv6CW7/Myf14Rhf1NOZqv18FT42vzX85hZeI7Zpghr5PLmBnhwFQXjjLaa4JDnaKH4MYif6KaCQD4HtM8CtE7cAl4FXM1345CBSrqv8EZ9VRXi2FwoD3sSjDa3fHeMdcarmX+MwNHJ68MYQ692AQfrglBKsAAAH9QZqYkFfQFQDwKJqsX5h760VKdkvnzfXr6BOCQF1V72n20G4oX4wedpV+2My/G//N0AjS6+HSJmfPgOICaIF8mGpmoanDwLsn0l/HECirzOSV4CCeQNnr60IXXgWvjUr0uZq4q2tKc4td377sJlXUZt12ZuvVa6O7ZAOYyJ8QjmRFrzpQ1x/J5PzAs631h4Oy6/xCo6w+w+8v4Rj4pHbvyqZ31jyh8M+GReY6m+dV3fEBGqrvXs7DJ+4fKrhavwTdcwEqrawaw7w0kI08+n3/28KjcyqM1NfMaMNK++54ThT27gfO5HYCtmQzg28aC4OAlxihr1dDgnmrRT6euL39fNkn6+HQNECJvg8A/h/wIsFxHfuF6lmlyfqFfWCMuL3/+j0JRl81hm0x5tCTtJV/Mubd8DNAuZlcZ9SRWlQnrcuPa+ZX1FeiV0F+6u++bWAdaml4LBHdCUT7wjxtIbBNNeF14xHAWdHobwI4YJiJnMa0cdWfjhYsS9rfFsoho2MQRPTstX/Aoegw+KZnmSlPXmowp69YQy9CUn/AhcWfFHPgH8MGZ8Pm38OhudCYLgfAKD0AyQaGbTVLgUIuLr3vWDYFoCJDmogFIOA2ALD0hHXn6JoCfwgvij59Mk+BVCR6+EG5/zgBHsP84CL4xHL2+OyfpeBEAvuLETZtUkoAAAAYQZqooGc3q8RtL6Xak6d31lwxrE9XkcIwAAAA9UGauLBX4VHawVBoPTa1l+wJYIwfwUFet+Coipz5fl7/Ar/9eDb85Np36eX+E4eCPoQ/FyXFd8oCXm6rXIFzeSzarCDgr5ajAV6cEvgvlQsS7+fHXW7hwCuTL8eaH67x9ytdfLRPduBIv6lMIkbffgm0sXAjhvb/rBI47WK/lILNqbM2b4r34Q1f4a+FK9l//8eFvm8YKy+sBBey1rw+2RaqjKJv5uv4lOlr+uoVpZOrYSY34/hL+fHvCEIBfYQEf4Rmkl+FeCKMCr3er2/UwNzvB8KqsOGxCjrKy4BuwY/Anj+g/6i+ply2sneH+X8H4z9cTq2AAAABKEGayMDfgl++vhbVAxY4KGGKrpUJXnFJV+fW+Dg/J/CX/+lgi/DwrXG+1DxyGBMEVr4r5zWHgrH+wmO1eq918WYEfV3+LBQlXVd94Kg1EJ1l/5JL4eX2uad93mcjFUkk7GqwTnzZarmOi4/paCDryAKkDJqobAXgG/xwU8YF8cSbL/Fq/xKufC+McJlGuCpoEwPN8cC8b4MQjpY+OzZzOrq4r0CEcrX4UDA0t1XU9r5X13+UzvV+rG/BTBJ1W//jO6EYc3weVWGEaqqt4OWNFC1Va1+PK33ris3Vfl6rL68fgqvfPnu7H31+qsK4Vi16uGtvCg0MAh7umfD4Y+FsQkl5dcMApORu7Xgxgrbvddc2W195Uv//CC+Re0Ny/fCsTiN1wjQ1WvGAAAABM0Ga2NDfwceD8CXk/k4Q4EzVZgQfJ8f3+CAJYxWuoROYg6BWECisWjXsEwPPBICIMK7vu6T7kqH6U6cKAsf2NZt34SC2/z0Nj+CZdYRcfS/cFBNYE8w8KeBB/N5LEvvl/CXHQ02i3r954TIqx61snNmq9K1v4JRO/DwGTFzAkJfxO+CeXu/JV9cOwY+BP9/y+Eu+vywmVd3u6WCbFeGeX4rEyoubPgpOUmJ0VLwfB5Uq19ECPgeANng4AgVYCfE5NSjGfAK+B08BqewSgcj18ax+adaqixV9YYP3q98xoamdzFVuaoVX69rwESCv67vCW7PgrPY8FS9iEWf/+l4/wR/rwXAoOEEbfxlJXjCNpuKAHi/Ajgo8BXHBI0ktvjsv/FB/rwWhvm1SLxaoAcnVfUZWCbgAAAG6QZro4XxwC08wD/AvbMxuGRQx73fk9psHcgZAnB+Cbw0GwzVdFv1Fv8KhhLVdVQmn+NcF/c1A0lE4nixMoYR0/4hS3EIy8eOBYd3dwV3zs9anVWPAshfJ9jh3BkBGBkAloIhW7tmSa+uZ1WTEgQQFZpMGgCk8ymgaTM0RONa6r3fQzEeAr2oEfbyETKPXAmCgmXd1X8VrAvh8F4U1wsB+F9AUgKnQFMFZ7fjdLX1iw+wkIW73S8DGCEhn3mNamKmPquEn1Xzf9D6oQQ969+nWgOYazJRfVfSwVUHCxvAZ8SbJgDc8YAI3AL7VgOkKZ414xmGlb4Y+GvwobSW63e7pO6dTTV64rUdbPr1rXrqwEGFIMMxstTpNriVyaXU073pejL9Wk7lNWA1JS5b5AFgHyCtVeBU4gnwM7y/wv/QBPQS+AmAYBk4uuhZLwGaEm58FXMqzFXrPuV3hr3u++q8KJAo8Sp/tn3Pp95P1+CCGvA87P4xBU3rS4+cJIU0/gvFsBP+f4e+Et4EY0KkomnE/4bVzjB4BvQXHe9V310C2EDPd61WvQDH5PVL/V+oz46hkel6hCMN78UYm7wAAAAxBmvjw3G5sGxfm/i4AAAEWQZsATrDb8Fo0Nd3d/gTGbDcPBg5kDtfmj9MR38X7YKtVVarVVThwMAEAEZtVfmYC5FhG63f4H8DJ8Lf70FIjeaBACheq32CRBzu//8/Hrp9gJgDpvBqGQc1uZh0GWGZ0hoIX+6KDwK2Ut4FbETxN9PResKnf9+Bi4qcn2AzQKKxz470bKvF18YS7v4MQ340I5fh3wz8EM9fpfvLJgSAefE4bBKDUGub/1T4Ir/2r4T18b3BJ5ATfN1GeCwLeHxuX/j4b8p+gZmNvfRvs3+//Gaf/UFVPDA2N8cL0iBrQlblxZEOes13/G+CjXCdcb8RXC14EkPguTvd3cVtqNAxhcAY1yfjYZNN/4c6qi1/Ed8mtjk7wNu4AAAEfQZsR+wv34MAaZhmvrpGaCxK9ejHWBbDwQIc0QG/gq2LrAsB3SY7A7hEOLVUJk/xjgdnbEZMCE3VGQgVUv/Cn7gmEqvVb3gsDHsYr+2CLdbmb6J9daa+v3v+O6BPVetUupoJICQ8Kjw0StUJ4fgitR6JHsFfpPV/gjOutFZWCsJ9YKfwl7GK+SvShD4c9YFEJxWsNaMMd9KMCsA3vwsCRU+X/BX/BnrhjL+T8mcVvixQb0mcFQv4WCnsRrhX8cDDxXo3O/wTWsHEGU9CpLxAYe5BnzQ0L1WquwTCb+l+KpEyrv0awPUFT7vfHe+eLVvj74UPS/jnGSVvAlhPwsHvnBGlqrG/1SjigCDgHD8EfwiHT0W/SFrzRnPCl0A6el/AAAAE2QZsgfyeEPgl//4X74YFreYIx4JAotbnqehApi+J7hCNwFVHWJseddVzgivzITqtYMN4HGDb9a4iCTwdBwELPnsZPKW4OPCwVKYmL0ijg0OF4lBMJ5llF4JhDvrVUi4RE5fG8MGj9YNuYu77gKj4d+8n1UKPkDXgbEQ093rA4jQGSDHXJXwh8QC4uK+7t4wYe58s4bpHwuCH7d31/uegTfwqNNkz/lMa1CpWT84jg0QIYaDPcQ4vpqRkvH7KR3+HDcUBSBwCyq6N0rvuecPa+tJ/i2PazyLQVzpAd8+/0IwLAMOvCZ0R8wBXzUfoJvX1sseBWBhKIWuuX2oPgWQiqbU3gjebFSrfXP+UtV66ELsRgwA69OAk4Vq+/DI3wrFCFWr1NnMPPSPxHfJ7//zg2cgtDwo+9gAAAAg9BmzBPWCWQNAoWa+W3bJ9EJhWB9/xvwQax4VU45fjnfgLgHQVda1q7/jv4zDtcczCKJ4IVqLKPvd911u38CJrgXPER4kcyoDFrAuhJVvtIJASDjwYBR3LPVrc+HOM/Xv7Wwh1CEMeY3O66rqq0E333ye7wjgET4XM97xtZXwd+/Mjqh8lWp7Fnd/rteDUQrlPgoBm9cbAqdQoehW1/CRG3Ggp8PBHWDsfCBG5bjPoiQnseAiwSdA8ARx6c+Eq+/ZDwQgsCCd/cuXd9AX+dhXwPnHsISzfnr4HXXNAfgMF4D5BbipxA+kMYg4E4MjlrZ9YbPvMAZoFQ4WL6rVV2lmOaqq2vZ2yy/1ad61RgriwZBMj7Sr8NoICtVqtVr3DYjVUClfLHCHm0xRT61SisFwXXjafzLm3PbXA+/DvoCH5AHwCw/gwATHmSCNsmAoOuBHAIGdrHfd8UHwSlM+vsWeXNJJ3mnhrXXWMbQo1r9cyrq/+yw8a/wKYPjkFsIQJxvIokcevCb8mSqfU3U6wVGRBJflA0wYnwm/yqutgiCffxjqv1BoehLl9sC7XOT9k/wx1XVWPqO/J9iDfBhBY076sAtpdUBHGAEWQgZV6rWZNa1zWkmHx6+ZNadUq+g9vzf0rqq0CYyr95vnr/Q4V1W6regfrwi+BSUv6kwCAwQjcTy6iec/A8/l6rGUO+9iv4dwAAAApBm0BuGeaCTNhGAAAA9EGbUCPfDiP40/x/yHr+2Ns6w+cKr48htVrBYDIcM8MhkzXX/gKAHHw/8Z4vlrFjtYiK8aKKzXd1xmuPRA5vVAR/gVspbhT4V0uFYP//z0A/8QqOYKdBPWESeDFeFg4riXzwj4zWAhfrwdfQc8cY9AP/C+5evKx82LDRnfQH+ZiJsaw+IDvwqfxknkvh8XvkCAwONdURv0yzaIfTLVc61qomwSDVrt8ZiYn4N+TWugUeq8Ji9f68OAsoi4QFVH1AfYdh2CEMaq58efxEl+IpQiH2fj9VE5P1/hXwMOsE3w/6BSCPxvwwMy/DVeIKrXkw2XhFSTQAAAEMQZtgb8YGNLhUX4bCvyawXifwkNRkNsrhID4EvBV/KK1X/++HOtE84gx93r+i+BPmh/MS795ggE/oVZPyr/rJ+O+beCk4Fc1bCmuGHBYcS47V31VRd/DwLi1rrwuN1GQxAXfmDR8gSr+LqlsSx73Hi8LHr+Pa+Phjwfg11hxAYqvniAJ7iVWhgGePAdoXM7+J5RBR+C7NzEdq86T8Z+N/BSHZHJ0evqrnOTyeST6wMQ7w6HHe9UAnWcYdBIEo3gqT2PCb8rLAwB4Knu77ugYGt+Kyn0UBtPNqfmq1XgtMu05/du0wU/qVW8EwfkhCAVXoFi0l+b6nKGugqfu/l8P4zLL1WuQL9fP1DPd1XgAAARpBm3Aj+EN+z5fDOOKL+olWPhHwXjzpCZf4YjNSvtXgSDArLxd7ut3v4EwOGMq/wSdVSr6v/8OVSEa4qbXyaUM5yWnv4wfu7u+5cv1BNFfeK3fXglKr6+/gq8GwIsn1/6sbxnriqwNIvL/MXghji/b4rfgogmbv6q/nC/xhTbvL8dHYz81V0JfCLNRN94r17D+uNhXNT/KPk4EcMsr334aMEy7uqqsn4v4HIAsIKwR/PJhAOa4U/OtcF8V4JDeCsfkUmuBP4Kf/DCVaqqqm+OFp4TfmPB+Acs/IUXL+UA0wFEvCZUrqq/Wg7661/bqS6VLXD/h3iIVR8QGNeD8M691fEIUEHpRSQ8S66A9gRdeCgYChbu+7nwz8fcAAAAIIQZuAbyt5ATTlKi/78UB5A8a4H8CYMPQEH9sGrlwgq0y/ybeAl8Onr+NeHUkpKGguD0UI1XcuVIBegTDEd61ccC/8P4n7gcPhLtisw+tf9Cz1rX15gEOB66BKBMH1VaqqqtKxcH5QFYD4OkVavbu8s2nHgZ0ZfmcTX1uS1sedJTZuoWFbX0i/BH7zm6qcarnVp117/NRWZP0wMvAQ4L8qy2q4Y04FUGDFnMgI/wwO54yjnn7ju4z4V+fCBBxbQdGvKVcfyWgu+CYDqFWNVe1gUoeBJmyrHQEgDcEVqtUkhcXJjMxgPAErmVVuuK6KisFhMX/H2QVT0yn59KrWCn1110JN34j+Gt+58nH0p9+IYRN5PFxeBFXhvw98DSQEI7VUiodGAEVhc9FX4cRVBW9J47HQSAnBsGATfgWwJIlqvcX8GYZ9gj59OvAZ3mgJbnAS4FbGKB+lo1WPAVgBR2RYutYF0EcCMUqq/gxBkGhSrXhAkKTwJGsMj0182/MWAa4BunoVM/5EQvY4ywQDMJngyBwGKry5PiIofwjGwNjWNJ6mNEYC3B0QUc6deEe4kmXPGU0+IiwsPuB5qlSJ4gWIP/746P8G4vmAFNANsQMe9V6mhUFoRzdFHSP0Fz3+al9QgB1MFAdiBL77hLNZtXkNazqpB4z3NRtlzvsPbbHPx6hvGI4ho2KnwAAAAAtBm5Argl9XhbLhOAAAAQtBm6Ar8FAKPAjgj+j0Vv+B++8x7/6x+X48orNjVYI8b4LBOX68NhUJFfXVeCFglO7qrvpFvK8nxP8Nax+EtY4wkE+/jvBiukEMn68Sv46Kkz7vThg4b+GRRLv5oCE+vO7562ugQBCsERNycPgqNV3aX0knMvwhGcO5fkMucEju7plwy5WheAOT4ry/h7wzi2z62+FgafFh89AX8PKU/FCwqZxXvvwG/wrJf0FvFhbqHKo/4S+GPgi+EtfWvBTPQKV76B07ubfmKAMkAR06Qqz/kRF7HUUFYGEFeX8bj5/YS0uDsM9fw/iIR8CGq8FHd93b4SVt88YcPN8Ylx/xtUC2YTu9eBbOCM73dy4AAAD0QZuwK/FBze8a5s66BWsn0vvG749nyf18XH+h+zQf4PwRT4/N/AkAVDCqv/8CL81VHK5fHb8JIx8RkalqBWxpb6mvKCYq3u/7wjFEeuSH4zX34uqATX8nFdBAPVqQ73fuEEfPd93+CMJ+SF+73vzf4mx8op7v5PZrwpV/D+lg91qbg4yfN8J+S98nlpQRgz/5Vr4U+K+I8EWxCCaXj/BLyaIvwb/Bd+CQZd3RvhAWARk9AF/BXj6juCvzlVFhWIhZq8nCP/gUfYDb9gI0Ep6Av8CsvD8IlPQNl5SKWQNbP7MCju9Xua7Ahj9Y4gGfrwEwfw66gAAAARlBm8BvwV/r/wgzjEBv4fj+hKt95f2HpwUnyfpQeUBtAUIJR+T1VgR4V5mJPf85FdyhwK/Cm/+4Lj0Cf8LUQu9rCUlYVevQ49FP+CJ1yqCIgDgI+K9EBZS1VcXXfJ6/sEkEgkuHvc38CkOIO1XgoEgjSrvXE1xXzdA/Cyt4f0YriPz+gRBOe32Ogal8yWQD8HoIzmiA3yQhkrPwxv/Fx4lhx3FfWvvgq8Hvi4Dx92bVZPopsV4Erw0NCQy91rrD4Tgw1z+vwSXe7/FcsHVcOfN/TwxCwKUnYpwYrSMw/Q98SGtK/BxJfgPeeOL6AS/+wu+76DnqP+Ffhn+4Q8IKkgE+YyC+gL8CyvAzhnWBqGVvszF133LnDovX+AAAAjhBm9C/isYofpFL2A20CUiqqqqi9OrEGArAWoKQwSSPerfysBs9N/mRnq6Da348so7/2+Alw+c6EtX4FV2ws9TUdCYSW7u/yQVMmMzyI56rRirwtAkQmOz5u/wrBINV5IfeDaV4e9+CTkBqB68C0BDPRGX4hSmS8cPVjRsCR8wcFE7vQ4wEwKqGiVaoHk/hf6bITNwEcDgEQxVpPmKa4qNV1xff0u82rofr7pj196vuv0UC0OyaL72jY1VecaCnqtaqqrfL9giziEGa11+P9/N4O4IzXe/gKADBo3+YGvoIVbqiD4x78MglIZoVXEEhPdGQGIaMatdAuBEsnczrqqKo6+Cg79e7WJhgPPPnwHiBt3hTAu4xS5GMJNjK8geN3Mt46Uv++CTFJhuPYJQIWYVo+qqNa8dquq9X3oMF9eEUG3DbrmWPihp1sNvvu6CFfwRmYe6uJAuH1h4E0GhbvzGtVX1zWilaquahbv33YFWBPAqFCCmzqsGVNzEQyFnGEAAhKB0xiMLTngUQZUXsBFCA5/DRlX4X77wiX9plqsFAffmXfeqX7EYFRtYQiAReoX+OdNY7HqtV5J+/d/XoRn+Ahdpe2PbilnvmPNEPdbnBlLpe7pb5PHCWM//ArBzHRpyL59WghhX46FVyMqwgN5UMbWLArAP+vsyzoq/Xxwyt+lfSn2/Mq6VWP+LSykct39V6OP6bYq64OQGKCYMT21esQ9M/2y7N13rXUb9fUt4iGndxHo7/IlNsAAAAHEGb4E4tCuTGZavJ6vWTl//VwENKGPV2q/XgdM0AAADmQZvwT9BL/wV1fe5jq/hAX/4JBC5jwT/HCwmbd93vwmZ60unl+5oPAZjehZgRVXfw1Vy+Vy5vL+/+Ouq/AjiyXfmUeZ1n+3v62b0r+YICREs/d7qOByCMEJ3fY2soyr63RX3dP/4UvhDwJ4b8CN6hIt3fa5vxlPxn7+LV/O6X+v/B4K2uK7xn/I0kndaesHceM1yevBqG9f19F+b85kLYvDQ7CM+0ZOX8+IDf67vh3iE1vi/eWFPhwl/ZPHhDByBjEgR/xilzvjV9ygChA/4EUb4WHAhuXHuLL8cGxn78Hoof1XVYnLgAAAEPQZoB/hpb/+/glH/Pk/Mb4+J8CoFFzGMmDrz6iQS/5hwjadaVK78FAe4sBPAPEeLd96tRP1vBLCYjykVz5r0UNDFVVf89a9p1rrnIIFFu+9/MCctJz5e7aRAfgggUs7ONp8yJQ9Dz7sOGrW+WFMGb4FH24gu+Qe9hIcq6r3/3DVL/sm1zwSb+X2dWPSKXd9Q94LAp4cFfFVXfEeF52gU3wVm3Ex5twKgY0uB7BfjMLdtrqE/Eom9qujhYWRWqu66rA0j7+scOONQ+j3xZ9BTwMK8BJ/GHaWq85kn85QRVXfWBnCfzR39+dIlLyJRuX4QV++3S7y/JDn1gTz6zjsly0/KCeW9VXjC+0IBR3fd45gAAAPpBmhC9fA1/D3xJeq6Axj9KaDBafiwUDFWuqpVwPArfgeQc9ge4qq978BZAo8Ewe8FoW6A7o9Fb/gm7D3Dow9Db+kXefx3xmuI/Covw+fwNgIlf2FfcEsuXdJ3t/rG1DmqqWIAJP0IApkcGzl84n43wWh03VeFnS/rjvit/9x/ODgHiueOF6wMAIgK3x1X8d/V/LXmROTzcY0CMe0NuYC7gRPAih/oDC/o9AP/DdmX4LR/xYIz4e9sX9Yw6/NRtwGv8J/CeX4+Xjsv4OQvIPJ4M0Ioj1u6Lyr+BPBGrm5/V9R+CQAlffXEU/ztOPm00fUNXjgor+EAoRS3wAAACI0GaIP3wkDEG3sHYI61v4Ecf0CuegGf4NuXsCHOMRtfrZZMy7IwL5xwIz0Bv5WcsStqybrutTuPKL16qLqG/syOoQwjIvVRqvTT6jQPcCODYEPVX1qDUBHCBFbxXyesmfDMDMOUkd+Pzu01wagq40CgAncnhAaNHAXgwAho8wDqAthvqq+EP6Ud9jSWFgPwK7QlzLq1e1fwFQDT4VWsy1df/w0bIazU7jwWBTY8JRKNSV6wlHV+6cB3AuYvVrwMoIYrFcuJFMqq483f6CRUQqnlJe3gMWgUGWqrVUYqrA/x0934Jvh6kW1mSGcwz1WCt1WeESIXvV/jQGUAg91FhQEwQMsmLV6uXfYEn0CgCN4YFKnOaBW9hLELk8YZmgfMDsL8IMYVmRX+995PfjITgQINtYGk0GuYauq6um77F6tc2LvpZjN5sucUXi0tl6pV82q/4mqwqmq+14g9B6+yhconv5oG7kgo5kAkNm4UKdr8bp4hpeDkOZlD1BTWU8TvW/3io8Ai+RGBTI04++d441LX8ZVGz/AqojaT0jQXkKgBRqBvCpFa9Q3+Xwz6Tf+BZByCt7p1XxenVGWTzQ/18SAye8RAUE9Kv4z0d+XawbQwRuTP7qvwVilZsyiAYrJ/QE0wsfxwi4rm6RIX1hsPyBHu5473fsDrKda+BFAStCl6gvPf5NT/C5+RSe0bepY3/MO1X4sTquq4kAlAz0I3ijTEI78AAAAAGQZox4E6AAAABCUGaQE5NiPBG1fmAKS8vgEw6eG9bsfx1epL/DBsv47x+7iQC0gcjGzYbJPHR//34f+PCQi73d+thA+vPRU/gWTsPNXVa/8FxL6Lj581GV4JllHrQaFePNvkBmIzEiuPH+hJ7Xfr/YKDO/qrN4P4Q422+FSXk+zDt3VG9CnZP7r/XDk+xuOM82r431+JF9p9+/B3Zn3l//Jd/yM7lz69MQrgn+QJ1gnXgjEZnH6Ih/hVv73toHoaQ81VVaoFgiNNd+8xGLL1XjOJ5IQgMXo/w4EOiij1+NYZ+m+g/I3Fd5NkXCqB5lTBeIPXEJ3d8Pe+K/CevAy6UT//Wr/goeq6rSr4KHqubFY8He4AAAAENQZpQTsn9fxFYJ1l+KqPjfaVKuUvgV3qOA9YPvnBJ3fmWOi6W0FQRE7vw7y/9m5fuN9bMITG6cfBLNTHhKCX15D0Kn/i1+4xR9q/hkZ7Gq54eDfwt4aPl/j/N3eX438WK3fd5jM+c6rNciwYGvBd8wYFFuutexIc6q78753y+GRc/DxVe9YLS3r82teF+vk84rfUd1BdU0CJuuPxj+1gvDNfEfEdAeznaEpf8CqRS1MeGQRADGwXq+o8JlCYZrA9AUP+aCzwKQ7wYD7SzQsehEbL8ZyWa+AO2DnhMV5xpGXYrLCuAR8kXva5cnjz54dzqFHy4/XIAhAl4HCuQ9/hharquSr8Wxb4I+v+LhnAAAAEGQZpgv4IQRXf98MXgpnt/LpdzgFrSM3EAY34Btl8+/Q7WYOnEihirVd/HVza5QUnp4/COEO48FmH4SivrEAKoDp8VWCwVT4v1eBks+q9RbqtV+PCpaq78NnFoXXVfzeBGCwc7uvnrWSKEAed4Fvqit1h1AXgx4IhXguGMY7/BUY27vJ+2ncPYs+77iutmAhQx3fd18epuY9rXh7iEH19AjMtVSq/AthehC0T74n/MozofU1ngsCj9CUn/BGJFHrGgDPQJYVaxda1QqV4JqE03+ZZqpqOOj4Rvl/w7Yzzk5+T9f+Co6xatd1X0Bp7+iG3e8o8U9fBv4M9RXilonr/MBqDnx1xfgAAAAdtBmnD/hMEIh3ex4EQJcgZ+WklGEFH2S/tt5wDlz0Bv4F7sPObrAMQEmK3HBOBei5+bMt1F4UT/+TSbpnNUkBvBkgQi76faNnvRoHUZBjogQBPBALY7VZh+v48wT2r90tDpKISAhnpDK8AhQXDRw4bLqoAfO6SnNn81Pph31vuPAazUnguoyxwAwkL7+L8cfHJEJPqeDEDKAiFc5IGZUgR2PKihxSOnEJhhl5tkmFLQDQJjV1S5lU1Q+uq1jllz11oiv0v3m0+iOmqsIPvUXJB/cfwMsS43+ON3fxngIoGnQNwttExwKgRKe33aJgpAegZEbT2muYf1nX4V6+s3//2VLv+1SvTgJcEgPgsCK77mFMJZr2tpr/4EAEg9CXDR1J/vZm0737GAqTvd3d4r0ik9f0oVBMV33d3b59mwBGMFPIBM8IAHOAdfYoEXYG8EpN14iBo8LhPMaF+K8sO2vfBWEOMXwFKRB7/DKy38KJizBkxLvebP6mJjyBtZ5Yd1LbH+nXA2wI3gfwMHgYAvV/cOZP2vhb1PNAwVwlxwIgEn17+ukAluQLVTPxp6Fafh7cDlb49MBEf1MobD+2FR/+DgKqZFUYmEgKpz/YKEtVusy/hkEda0/FgL4CZgAAAAEEGagLgmx2Fie2v/IvggjoAAAADQQZqQuXm+/jvCZ9YJp5jHwt18v1y/mGq/jBZTarXfSwnBz1jIKgodoSk/4E1823Cgc++oTxitP4aBJ4RDwJLu1SnkDfgeBlYNzb4gMj8vnJq6FJ/De8EBPHn8cO8PiPcxHd3roBJC8Q417oYxupM9Apkh33d9xwRhn0L/VjL/gQ/JYBKwU90S7948IBcYt/D6BK1VarvrwZPweAmBJ1VKpPbISAu4c/wECH+Ji/i74Q+O+azx5bVx/z0+gLSBKK1F1rTvgcpjbuuJVKuEQv8fgAAAAT9BmqBOuFuaGfkN1XyK9UBL+CCS+/KgSmd3ve3gmEKx/vgVg50JQbhkGOTxP8YEYZ14C6/EhKq61Xh8h7n43/zarnHNUrDZNdrd8XGxeEgr6sdAFr8pccXUgGb8IiLvu/J5+Fg9/48PKitZoFQ3aazA1PpYPgPwNcn6w0/BPrD7AU4KtZICogwFXvV9CWGfwHvLyQfJQtx/bKPD2jLocmeBVDuMUuOdRG/QuhGE07rpYgH193mV4jxp+HjWi57AeoItchoW2li/QcEvzOE3ljmh8ggEozu93tSk/+SOByAWfFQiHzLcopjHf44Z+zqqrL/xUZ0C4F2TxgyoBT/g68DqH8nilF8HeE6oDqU3/nv/j35f+X6jOu6BoAu91D34FbWCf5BCvvjIZF1VJLLjwgkTHP7bfoWXdLVfH9AOcGuAAAABRUGasE64Qxig+xzCEyUQMA1vwLT8CQBlwgv3+przfXjRGWu4frjnd716QtS49z2/woHFY2OgYg1AhK/wuCKq0n+QFtV9VcbgIzHWBR1YJ1L9h/E0ClquujVVvl+pAyY8Eiq9z5D0AX8KPaf4Ir5qP8bo+B8hgEqGlLO4vu+Tz6h/uO5QLgFLM4/pFfjFX5Mz30A+ISuXfNjXAymcvUXXh8XmH1/pwWCutA5IG/JQoMolc7w7D+nwj8sDJQpjwgXhFUPNERgK7qOBKiETPquwCxhzL5Ql+Wq1oIQcgJUGIfVMpfD58fCkRu/Hs9UD7prB7+IoVEqsP9eCTk/r5oY6GrJ9bSD2Bt+DEFoLeq4vfwNII8vfgPv5xD/V73wKPWqs8FIrL//U0DZjY8tGN8C7/C1X6hD/DYjXh8yxO/Lv43wIYJ8YtsAAAAHtQZrAT8PgSOLAqmwgkBu6SUf4Iv2OjFNqv/A3iz0BH+ExsMWAd83GgNfk8b8AXkGob/n0EHoHwLj5bpJbmo852DIeRK7qrq72ptcOpim6Bc1V7n+BNvDUJ4GI4VSri6pU/wTe8vu0N3bC+uFgYk+O8EgUKd3VqswTzmoGFB+AzmpBgqx8F+0FY7jg4GDKpcie9f5D95+Yo28djlMCIE7HPveHxoJSq3Q8C06quheLvRnwEgIqq73ruFMzKtVdVdcRsWLWl1VfMo+kq/h8r+alPmrjTDoja8uZCRIV+DfMJpsUVrOxMAfyByhIJGe9396HQ0rDxvgoWEGLbLES/FSipcct/D3qRVrMtRio1d/ghv+DW5MX0CYCEMSqq4ubFVaz2tXvD4VB6gSO6q+o4CeEwAn6FAlw2eKKZPFfwV78UBJ+BbxP4Kx3wIXYFEZ8FKv2BfFEqvanxQhZsaVWsQmHP2cLAFxxRCDcfwGSFzsWwgTFN4GKfjX8zb8hBsdVAF/hWmbc+1THcMBzqr/4US60CwN+BeHdVqO4DDxKHmyaOenxQKEP4n8XaW/o7mmtKGo7wxpF9/rzj9+oQUBcgCXxe9XqtG+GFieGzVWP2Tp9R/q+4QApjtX8BNhUlV45Q4VTscSFlfbCHAYYGrXC/gAAAA5BmtAjhPEEjPV4IeaOgAAAAT5BmuAz8LhpWMniP/64+Jyf3/9y/EqgIxkoI86DJRfqHvy+mDJ4xZXuJjZb8FBKV9394XPl/wXjxUqd/wgrngSPgZD4xDwkte8YMKFtV44YY+73xDLRdwJobgrbcNBjlCQFLJ7ISBbGGAhYQAm64dvQ2Bl5NazNfKiqMlXBCl80imUzW72VhU5sv11gSVEsSK/Xg+H+BHC4QV7u+7/D5/hj4P1fwp8b+EN/G6wY/w4fwgTigBxoR8PjsyrQejK/oIkc/8cJ+Fdfq+v6f+4qv8RVdV+HhHh8+T3/hOCcvd+HwzhDDYeoQyD8DEn4S+w2asvZURwDGnIhUz/5kB/1za/VSr5OUMq33WCr4KNLBPARUp934dRqqkl4eBStVVdVSvrg1BaGVfXh7WExxXVVjEhnneMBx4T/YKFu+XC4mUAAAAFJQZrwK/Amovd+Bl1yFGarrvBuP18fk8x1/xQTkhddZPIvhIcBH9YPgbAoDoKBS63avqOA/AkQVBH1V+gRg2DxF11VV3Pm7r4HYNeBmNl/4/+lZ4Ogp7IC4Xu7vtWDIPfF+HRejYG7YzVc0Jaw+EkO5Cg4FC1F/VeCnl/+GwzWtP8kI13NHroqv8ERX3s1yBnvqEM8ST6FcYvvAm64X+t6wsGgoq6c+upuhpOBMgm0n14GYPckH2ycZ15Od3fJ4nxQOwK3gK0L5f4Virxs4jiO4hQiGmlXFAKMC4Gjaqm/wm/OEw6G0qqqVfs4S/l4J2DsJ/FoegHqOnzpCl/4SeT4CWavik/ZsR+BJgoEbvu7YxQm5vfGQkOec4wAloBTwVBFV6V3ffCUQjQcP+Ch5DjvQyFwazKgh8CajDtV4UMrc4AhcPa4QBYJVzAAAAEmQZsAI+IARwEzRcE4CrBarmjwPgGUefX4IVqqdQgptQfr8+hdly//lGaq1gUg96eD/xsqCTLzgub2uqsb0w0cptV4W+Be5f4a4JSD93jUwIr08P6mCWq8hlY169GBErfDXwn4aH+hut/w2T0EvDpqw2fwIoK9/EIYx8EknCXzcWASMCV4S4hAhGt8D6TEowCjWG+CQVqqVV8NHpv2UND7gyCyvv+uH/B3qMACKZvAuDscRNuZurZ+ngiF1egrjJg7iT/q7wJofDj1VEEl+Ba6xxUa44JT+LN8JK54CqGYiNGP+HdOsXrg3gUlKjKOxlay+BzxcBS++SFgSCt3TLhuFnVV3dnw1p2b68BcfBMGcn6/wFTiENQOX8BOAQsFdJ/A6A2SKhxMAAACAEGbEL1wZApMCLPdyrEnq/D8C8HYTEVPzZF5nn8bGousFQ5AP/BNfsk/k64EzXCEJKnUn8IfwVhYbqqr0/8JmsTrvhUH4dV/H+cApIf5gahfwBJgMFYyefgNDN+7Fx4OgS5M1i99uywdBmIOCnVEWfMM+IwzGzKlRCbrrZbVb9/JixGCH1y0CsHwIjqLpJPrZYMAyIF+i1e0esC/RtCDICSj0ZB5r071fgGCB4CMr1sbw/D4G7oCuBk7+wpPQJb4ZfQo+ecBwAi6YPtcXGZfDWP5Ske78BbgnIdSZ8NAkGpJcXF6q1XVU58M2ZmbHnHI4GKirH8CihZFqt73UbDAJW77vpeQCh2/nol/lU7kqu4hJNYE0fk9Jfjvxo49n2vlfxoA/8F2rAW0AbZwoiFp/29tvl+Cf443VaWFg+OPX6dZPwNbDlVVUBj/BKu/OvB36hrrxK5PINEDQ3zfjI/wsGfA1ic0/jxPwzW+76xCKEYlpQhEB8jQhkPwWZOAS+w3W/Jq1Uc3P8FrXdEARF/xFwu+PiqEhpMtV0rnQEguOvoSSP8EIq2BVBSwqvOm+6t/4ONxgKP2AQoHHgPQMamg8gMv9Wwi4MY6Nn8/g4BE4v87mV1uV649Btd96Z+DNLJMvr4CXCCub8DYDnR4ArXG4hR5joBsg5BKJe9RfS6qI1cwAAAADkGbIG5N9dAxVc/6uQI0AAABCkGbMCPwiEPBMTwQjdYGE4ZMreBOW/hcNilXT/TjXfv4Y/+//Bj8CG/EBBXPivCwQMdRdeYHQFoFLd66i+Kav8NiOq6pcKHLd/nL+a7v4MByplXw9hJVQrGnwTdh6jAUjhT8V9kSkz8X4EkmUn+FPHAihxX8N/jMaiiNPdfXycnCmXxH/fHwn4NlrgzvSJCgBSAF40td/GZMlfr//Br8H7+JxCHr4YOOSfHsbKXzchwV4hQ40oSiAK9YICPgWUct4DWTkxQcAJCew/Nfzm9TWon6MEu+3jR/15iVgS9SgzAsq2IQ0vikQZ3lsOd3QCfwM1R+Ccx6Bii8eFoICrZ9gLv4N2rFP/w56hDAAAAA7kGbQCP5jdy5wv+TfNGpP+qdeLC3VVXotXpy1Nf+q9/k9d8KTZfmjv+MVx47L8cCjXvGig/LVay/FxYf6ot6NLFGK3fyejbyYr/wh8Q65POvQzJ6pBIF1Chn0FRxjbvL/4f+L74a/JriJMNP4ZJd/wv8b8Ma/3zx6/MZrXwl81YS3zfCP2CJu90yhCgRnqpj4IhQ328Iwv6xcBo8IATgFWTe8npV8JxPWfQCfjhEJXv+5QHaOyfm/+LJCy19m//JCoEJK+wDBgcw473QP15rBQ8n4KZ6AHzU2DKeuoR8PgnBI1VVfJ+MN/A86m+pQ9wAAAEMQZtQbobglXXhL4F9BwQ71QD/wFcbGypagVj0q/Krl9Sy6EP4FSHzrXqL4uqf4z2/fyiVr/4dHfeI/ivBj4wFAOD059c6WVT7nd3+LDm+cFJCDlX4JQ6Ga1VL9U410vz88qsYhCzbwWfv4e8EjlwRjvCgY14FeYde9fRR73XYEsNf9CII+qpR1/FyUEh/geBOqAvASQqGc3/MWxsJq/0q+Fhbe9V74SHBPwoEy1XXN4bH5P18Cvz1/jnava/3G1HigHzaj6gJ/jwGAAifBoNIIVa+YEJlXZXHb+Ecv/+TzHMb/8HwT4QAeoAjXXASgNxXg1IqRS+HR15+X44EuUGYJccRm1jwJYj4/fwXYAAAA8RliIEF/rjvHdeKAATxe/NhbOAcl3JmOYwAAQB16dv4/v/PvXu5d9WskX9P+Z/eaGpVxcTzVciAzH/ABk++U8Ymg1E6uq+KqCysnrE/etfcPHDAAMuAb7gdJyynNhqNh/VcT9V9arWtbOq6Dz+uix4JBds4rqavfuvVX+vU2ipBCCxdNPI06wIRBLp5zX9VXGG79fRDv/jTEShLNeIy//nV4dfeleJl/bOmHwxbk8wG8pSNUIoZw5OCw5qo1/8gR+/m21bjQLFvBDA4CFHV8QswzHoBbGGnrz4353V/1H6My5a0t374mq1X/WJtFt4vNnX9VGNVPj7/3taEGRvAUONBsMud2Yy52wjVVquKsSse63fV3r1C9aCQB/xp/nVW9x30GDdVpciZV11cdNKT6917u/irVdx1re+PE31vLb/BVfk0R361H/gi7x2NKFkZvwiYZOsCMpvPSODQDIkuHEICQyeM7/+Z/2Sp1IRfNedfjonVVUVrzmiRV8xX1hxj9573vjMJIYLvAmLaz30EE3HOJ7vXz5r+l7vu/9tud1qv3vaFqpcvvpLa7PTj9Y0Giddr4/T9avHHfw2VYuonmecUbQgR16aacLtDbP/+28H0DEP+mT6U1d6fVRqqjBIq3r/3/wQdy5//6sED7R5wkmo74icDO5CqOuTnqvjDgS6u7qhJJ+GNiTaq55q5iMf8GHC3zsXkgt+mm23rkLoq/x6VeXKpJb/225r+o69AgaVJZK3Va/WGk3M5yviGpfb2/uqqp11w0e0q1qZAeQOvBG4BnjYS3J4qq67LbUWC99dbD+Mf7szypgiBYq1335c1FPVpVaWvVIvOfUVNWXuPoXUvy5ifr1P9w0SCpIp/wIR0gwxlDQPAMQgkCvfiFaL1XtISlA+ecaU6p0UCOWKiOzoMDLJyaEwiQ6wdgromor/0CwkaX0Ah/19dRP9fBYK1VV8YdBoPX+AziUKx86vXcdi3qt9SZ1fBH9a1gnJ0l+lM6rqrrHHv993yECzP28ELXgY4FgoVCjc93XIPbv69pQHhgYAh4EI/BpBv3yKrdvv5fVdaHBb1ou/8viWRm8uUkSwds/9eq4Zr6qqVf9Srrgt61/T/z+3QYEvquTH+/emmaDRu1qbDIJCut4CrF7CYAD+t3/qqH60PJz4s1r5D99fLJ2XHHX6Zqp+CqVBCGWfGDEQ1m31/j/Wv7VVXu/v0V/+bt+qrqir8cd3366mgwSnx3m+euqRVV1hA1/XW7H2/L8b23WtSuV6tZM7u76QP3iSRnxUwAAAACEGaHCcPyYL4AAAAlUGaKgn8335fiaI5l/njPfzgtJquqvvcP/m/8cM+L/+IvYrwWyVX4Pg8rt+QdVfjv+/WuG6L//51xxfWrc0ZZc8e9dR3oR403Aj/P4PtR/Rvgx8FyfCnjghryi67Fvd7u/Bi/Y2Srw78CWCXL40fL3wLD+xuX+OD+FPOI+Mrhuv+E/BkHviqL8VUT+G/hzri4T8FD8NcAAAA4UGaOw3qseOVvYhX6CP5Q4nfQG/SDczdfFfKGCNUktWmf2xpr3W/yf///CHgz9BAtVDXg1+CwFBzJ1411+viWs1DZXgWQ7dfXtbhuShYrx4/5lc3h+BTeZTnjHT4KBez60qr4g13+j1xVXG2sHIJfGJG7+BUHewgrb8nf/UJUqiQLIX8EobOZAR/hGaTUb17/rg+y/+B99QTqi60oXCw8V6BEHG77D5V+/HBOqh3EQiz4Jw98FP4LBmq7vu7ng4QLiaru6d+JF93y4/CA1WN4L+Cc73qq0qrwTTKr7/6Akj6gAAAAQZBmkkDfxT7v/w6VX+gqOd930Bv0Y/vpebXEynv/H5b9rgizjUKt/hEi/P2AswNPf2BuAvdQr/Sx3+KugMAFQ45Ay70CcnwiY2pYuC0h3e1wLgnr8DcO7BKbk8dFqhUlFRJehT9g9q2TkasUEv/hMw7d4xGBbfRHTwdrM6q48dPgkPXfS8Ur6f/BL+EvBv8HwT3f9OqA2JnAz0iqb5v1bweBYJVXz/X+8GcBY9cwGP4VOcYhKT/gnpebFZOC7w6H/BOGewYCcREg9ZCGNaICP8DVL14TNnGUMPFPAxJGVkdiRf7eqi/v4T/xMKs+L5f4kG/rCnL/4LB+sDkBMzDlWlpCfn7gLnAAAACCEGaWUN7uCCIBFi+5m67mKz1FBYy+90YqsoEaBHHiVrd72nzfzV1Efir9VNk2cXlQUA1DfBMX7AErNmL5P1AqhgeM48M+eiETI/xKHLl+uFwIcK1vzXFQEAoQL5Piipx5Bu5Nd2itbuKro5s9reakmbpUYK4EUOArqu1SvcVueCUFPXq+O/+O5AUgmOkRT+DcRAy7n0KQ0a7gxKei38JVbQ78IQh4C/nzUZ4Jkyj1MqrVf51hHfL8VhuAwgdM5Z3evn7BXFmvaeW2v/H75erh2wgRuhqDPCVjbOCoxhBYQJUeNYLYBBwKfQCxICki1VUl1q+T7/kObL/OBJ6HMxBB4C+nR4V8BD6xo/Hsxf58buf4AjQBEYpCS00BYHdwKm28FkhhW7+B+BsGxj3r+HH3NFv+uqYTSfrW/X4P2FG96qt79VZ1BRmVdVW/suCwR1QlJ/wIVkL03AJaDY9AD4KS9/6gjPqt+qxJLUv/4IzrVaqQLBNJNhCQEcwU3HEEl+CQQrcGv5NWqrytSlIud99d7se7C273YLTgPueaBAEF8FaMvIH/auYiNWqd8JWCYKu+l4qUPsS3BviI18gHoQhQz9kf4tHD363YBuwHWf7+bXzwhGDPkNCF+QSFbBwHfJ5ClYkQAKdwc6t0AIHO+7zbJlNRmdYcda67/W23kARbd38gfLjFAtmqZQAAAAVQZppgRxOsVzK5FaLCXapWP1iM2IgAAABG0GaecEfoMeCsL+Hav4EgqxzwR9YThYSFRm77pUNv5qkv9g7L8Rxd+b4aGfE/Xwxl//8QMVtf1xOEqdOPgsw/BdRlxwU6BSE/BwK8Oi98Z9hIMeEMnBgcKpfyH72/FVReuCfWOfoPghHKu/hBq7fPCPgVT7wEnivApitffQkMHufWb9dYHQXreHsv4dCPnCSAv4lUcxxT1VaIqsFw9+38IubegfBbrx0SD+28CIQlV9C4u96qqy/C2HffBp8EnhAOnpA+x7pie2KWw6GdYUwSiuq2kvBSHzmQEf4LmHw8Gza1nkHP8PhmhUelGsgRwjKOPgZ/vzALUCX4LgVfGAkPd3c5QBaoCpN3ergj8vgx/mUXdKuKUTd9d+C8TgAAAFfQZqIgEfwx5YjPnbr4GsEO/AVDOaIQjZPwnQ8XWBlGfiDh293W7tVobGeNa1YG1JFLPiKqlVa8OjPBUEuvGRYhp7/kARPkzm4RDKJ8B82MDbZl3wEsFjt/x38N/9A/9RJ6AT8l94QxI4hK/wxmuZCe8Cyaluh28fjCb3k9L/jQQmacmbGXr4Q638JecarnONyedr+q78KVT2vi/Q8QXVVF+Tym5hm9XrB+P8Dmdf+BbXKAf8drx4WV/hq8HgFrWL56Epr4S2fPXBdDq9vAjhuKxCglHKiZVPHdzr4fly+lAPXVjt3vwr8E4d1/S8CL8D2BLwh0BHwnLjXgtxwhCYEe1OEQFl+RBF7jrB+KCAZyfz8mKFeYJrQQqX4NX9X8wso7d2ilAHOSTPd45MRUpvA69/gj6q+X+EMCTyfPzfnv8M8X6/xiFntzNpSCKtT3hwVqL71/bb9i6rrpUsOZeXMAAABL0GamJCfw5/4dCeT7iMBTBV45hhVrJ7nMCmAvwlxfMC6NHqqVV3f3EOJw9cBZyWyZxxGixd1jTS6+0+qUyEC64LzEuK/QeBV5QU//fwj4Qq53/f50gE/GWjL8Fn6V3kC2/jNfMrH+vmV/JR/0ngz+v89AJ+Nd+FJ7v3JCrA/9WBDwn5hmX/zE9XWq6wRd3/jEgSP3GW/6xQQPTn1mYrhmsP8veOCXVb+EPGyaqvBuxJNVVekgFrGiPHTtf4vfwYAmFKtd3foCn68ZHmx9cVCmv/hfCDVAF/AZ05OsKw4X89CEiP+B0LGNgsByCY27u7ukNY4CeCUCV4NwKnX3CXhYEOIQkESUHR2bdLl/jQGLB3VjCCnxvp+T7478+gE+Sgusfk9/B8f75kZzoDWCMxt3gAAAc5Bmqih/EQERxPjEQSffCCGAiOqEGd/wLX4UIgeRQG8MBeq6rr8VYq0nnAyCAo1Var7vdId8+XJhfjauE4XBa71pLvb7wLscICj1U91S6RM7ffkAYACeBSz4r9eW3ntaqlc2f3UarWPJct/VroJ/6eUBIgiKfBdVMt2/VN+S7+eHMITJMPgXtG30CYVyQV+BzAl8sCp4CGBNshATAWJ/FhQOH1VvzK5514YDmsHv8H3E7PL5PKyE9/PvERI2sdQUVdomWBs8aJEDGj52/fT68GgWJveOkBZrG+m7juQAlIU3hcjCCueCP4V/B5k+m/goxJVrW+sdHBLWMwn83gRQuSq14Px5t3FcJRQJSrQgI/w8fSfIQrgVQEZgnEsuXHmdDmeqr+CqlX7fQEPjZzW5k8jJ/Bj8DqD/eBQDQEBnoAfCe4178eDvGQmNb/rwIwRDQUd9CSR/wGOKQ4s4gCJkOuEEjE8J8uDqG58Ylvm3FFKNF6zn1r17iZkw9C82CXWr+gXdAeQagrTvqt93cwhglOIJf2/Awwi3f3dV0PRz4ij5jK+cDgBUPSB4Qbn+Tz+HwGABRmD44297XikZzGKIaci0Aiw8CZ7vu8YRiMej4AAAAAMQZq4s8O1w8/B9hOAAAABDEGayMPXGf64yEcw6vn/oNBSTMv6Iy/bCrLmjiK1VtfKfO93apV3oSienLuZkezqDKYfp/695M7z30d/Dr9iBXd3fvDwSQjy64T+aouBYv5OEvY5X+EPBrzwylGveqClBJ8T4jrf2Y9N+d8VLh1eDIJO7/JBZvfVbVUqiqBaZwefJ9L/9Qt4V/D2nBUAmALJSinv2Dw5x6b8FE/THm3AdAOj1/kXftzGuq1+uiahLcQBBQLQN3EAUe+f8Hoftlwn+B5Ay1zVgkHnoTJ/wGOLWxQgVHgXp7P5hudfD+vjdYMR+Cw7u7u7vF9vDr/KMWvzeC0fv/CSY9zHyaTfQ6COq79X8F3wdfHG7vGL+YAAAAErQZrY0XfEeC3rkzqICD+TBaxABCAfHFcDtfgXnYd4DnBrOCSurHRx5aqktacc3d3vBwGIrwyXXw918n8JfCvoP+IqixxhKTyLuJV9Y/Req6ivQ3iQF8AksT8kT31gbe/9agWWCaq+7v5II1qs61rFeED4iUQ57PQL34FHzz4f+BcMr6wFd9jOBFq54FsIn8JQbfCaGzRjH6NZQ0UH3+WtfAngj8Cv9lPTD/Cu50HQ0Z3u/03a+fvg1Htva8OxRHe668fyeLOf/D+T5Uv4LcnpYrw1nSAf+CnkVfhOcyAj/BfDqsBSA75AC3B3Xw3veFyjbu+QBUkV/C4TBHWqv2HgSlqq8gG8ZsixR/AQXCCga5SkAh8lH7xsoRyN8gG8DtJd/wQeDwcrmIQgYawAAAE5QZro4XVwx8K0uGq9QqOd9y06Bjj/Bpvipx8VZbr4Ly+HgvvoWT5Pjt8JA3GZPl//9X5oLPhvXFlyCEN1hlRasfEAjGJRdUvwl3BRQhS5L/+c//wt0/MT4qjxaxb2zUzXrqaq4S791qq1ojfrXyieqqouvDvXEfsZ8xu78EkMd3d3c8QAJvg404ODZ4hFAhL5HLmC3oLcQDbzQa5qU1jwhYIOuuDqBNyftQeV/gSx5qryftcFOEh/kYy4ruK3eq6ry+CkCuBJGdaz91rvw/KZarwJ56CUzSHv4IEnGeCWTmISaL0AX8xPh+J+zhFAR/hHuV4Dcn8DiS+SZGkvPk+N6/ro3UXjFDp8/xhk7qbIhIEfqJf4FbD/wbjj1/CL4esDMI1QHeD8xDO98wAk0CH4CeBjXl7vwTDlbAAAAeZBmvjz/B1yfGgK8CR3AQ56Af+CYv2QggtTL+sVeUAnM41Ab+Be7DmcRXUf+FjKvd0n8EoeJaa8gEQohjfm0niWlsBPAgEaiOSu82P/9ArF5bKRb7TXuFOg+CXTXFnoC/gNzfCpfxYoBLHr4UTVL/wFJyfxPw/0v6kB7+CDUcxoeAV2sSaPBenfxTVflUzwk+qj+IjPBoOBQsmGptO/6v8ivl/cDPzFd7XFBgFPd93d9O8zB53PiY/bHcM7HCQeh0GgNjjn/H7l75izNc60piibT3d79cOVmdRUa69e21rfvuXOb/XWdauXL73kx9dcwBHwInnN8W7v8Ly1VfCs3VY2cSP0nhoCEccitfFd5oqr7MBTOrDxUl5pe0DekFhITp78YmXH5ACQgi7AtgTQyId3oCP8I6TZAgDMWnXF1vwK4VNpO9UCUF8SWklzJM/eNX0cVr6r2OwIozCEeC57Kv6acniamH/FiBy6qvN9dbiuLDR769KH4Ilez4P9E+SvjAFcNO0DX/ZwL5fb4yJLPmxrQ//kVLHMIZv//QX11i1fRKg9AKKQRszUrh6IEdmambDZMbqPmq5qsMlSXa5vrhUOykxPMcmKpAU8BDAnPQHfBT3Lj1gMoCPBJrAsiPVQvXgSggqdeMwAAAAQQZsAuPz4LfV8v/kUnUZ69gAAAOpBmxC/gi9fhnxYv/XGS/NvnAhC9YPRYOSkEPo70h5FTryfF9gT9c1F//yeWVBT/Jxm8CEOryCSEd7XAqBb0T4z5N1MN+xtYG8XWCD4fLT+bx6rDZ+Vg0Pc+aFfAmfD5/PBJrV8XHgqi+Sq+AhvMqrNea1XbW/vr68GYK/g4pY2GQSeNCAJBUX38Ceb8JpV1XygLMOmW76igRHVdOqIgWgYfJ49ST/KyRLizbgxDofAv4qLdYn8L1g0CWuv4QQ5MqwXhACz6BGGiCXe1SwTghCObVdTzGugVV9JLk8seN//DwT1wvFeBeu7658AAAECQZsh/gg/+F69WNcZE+vqxznzrnjdYFCD8r7TWaDzzfByH74KOQKVfWKxiuM8OSC7OafyjDJ3vXFAUgRfFVgyXnE7+LL3e/6wW/9ZhYrrBSfNWqqUHIEToDqJ8by/edYhXXqtc0MYhHGGyu4JuUEAE30YoxarzhHwbg1xMKhHjWQoFTkA0h3zhPwJIIcQhAGMckQkB/L4RKXNmjQE6ASvMbaauSLoN61Rr8eRevJ5PAXsNAy/5j3XeHpJ6Aj/E9l/4S6L//4Jh2IQUZ+FBY13d3u8QjI+BNC3gQRXg7GHooXgypZhsPrhoPhXL/gpD8CTx4BkvHw59AoPquq+Mw/8V9EgAAAA+0GbMPkXHeX/j4Trm+TfNP9/bHar4UKbd+D2ev8b6X/+rgSNtYEYFR6/H1/nlPEgsJVOiwmBcjPhbWDsRGaUBfQaeWM3x1/E5POf/7wRBb43eCMMk/inVVVeZV1X/0HzPuuT0b4n5Svd0vDnxgzfGx/sdiZwXYsmKxxW/jd88eQU7/Aok0XARsOZlNKIuo68Mvrnu+pwUgtgaD0A/kS4DWT5wyGj+ICy/C11jogG6YhlAtR1ql/dX0/+YBkhHigPABV+IACDgJMQio+BFGq3gXS6wEKQH4IQyOXVIvCmWSZf1jYIR4T5s8+YsA5gPdRfCeMQsQNOZRi2+CjA';
const EN_DICT = {"বাকি খাতা": "Baki Khata", "লগইন করুন": "Log in", "ইউজারনেম": "Username", "সংরক্ষিত ইউজারনেম থেকে বাছুন": "Choose a saved username", "এই ফোনে ইউজারনেম মনে রাখুন": "Remember username on this phone", "এটা মুছুন": "Remove this", "পাসওয়ার্ড": "Password", "পাসওয়ার্ড ভুলে গেছি": "Forgot password", "ইউজারনেম লিখুন": "Enter username", "সংরক্ষিত ইউজারনেম": "Saved usernames", "মালিক": "Owner", "স্টাফ": "Staff", "আমার প্রোফাইল": "My profile", "পাসওয়ার্ড পরিবর্তন": "Change password", "সিকিউরিটি প্রশ্ন সেট": "Set security question", "লগআউট": "Log out", "আইপি রিফ্রেশ করুন": "Refresh IP", "প্রোফাইল": "Profile", "দোকানের নাম": "Shop name", "হোম": "Home", "যোগ করুন": "Add", "রিপোর্ট": "Reports", "স্টক": "Stock", "সেটিংস": "Settings", "মোট কাস্টমার": "Total customers", "সর্বমোট বাকি": "Total due", "ট্যাপ করে দোকানের তথ্য পরিবর্তন করুন": "Tap to edit shop details", "আবার কেনার সময় হয়েছে": "due to buy again", "দেখুন": "View", "তারিখ অনুযায়ী ফিল্টার": "Filter by date", "ক্লিয়ার": "Clear", "সব": "All", "আজ": "Today", "৭ দিন": "7 days", "১৫ দিন": "15 days", "৩০ দিন": "30 days", "নির্দিষ্ট তারিখ": "Specific date", "নাম বা নম্বর": "Search name or number", "মুছুন": "Clear", "তারিখ ফিল্টার": "Date filter", "কল করুন": "Call", "ক্যালকুলেটর": "Calculator", "অ্যাপ কনফিগারেশন": "App configuration", "ব্যাকআপ নিন": "Take backup", "ডেটা JSON ফাইলে সেভ করুন": "Save data to a JSON file", "রিস্টোর করুন": "Restore", "ব্যাকআপ ফাইল থেকে ডেটা ফিরিয়ে আনুন": "Bring back data from a backup file", "স্টাফ ম্যানেজমেন্ট": "Staff management", "নতুন স্টাফ যোগ করুন / ডিলিট করুন": "Add / delete staff", "পাসওয়ার্ড ও নিরাপত্তা": "Password & security", "পাসওয়ার্ড, লেনদেনের পাসওয়ার্ড, ফিঙ্গারপ্রিন্ট, সিকিউরিটি প্রশ্ন": "Password, transaction password, fingerprint, security question", "ডিলিট লগ": "Delete log", "কে, কখন, কী ডিলিট করেছে (শুধু মালিক)": "Who deleted what and when (owner only)", "সব হিসাব PDF": "All accounts PDF", "সব কাস্টমারের হিসাব এক PDF-এ, পণ্য বেছে (শুধু মালিক)": "All customers in one PDF, choose items (owner only)", "স্টাফকে নোটিশ": "Notice to staff", "নোটিশ লিখুন — স্টাফের হোম পেজে দেখাবে (শুধু মালিক)": "Write a notice — shows on staff's home page (owner only)", "এন্ট্রির পর WhatsApp বার্তা": "WhatsApp message after entry", "শুধু মালিক": "Owner only", "রিচার্জ অ্যাপ বাছুন": "Choose recharge app", "নম্বরের পাশে \"📲 রিচার্জ\" চাপলে যে অ্যাপ খুলবে (শুধু মালিক, APK-তে)": "App that opens when you tap \"📲 Recharge\" beside a number (owner only, APK)", "সবাইকে হিসাব পাঠান": "Send accounts to everyone", "একে একে WhatsApp-এ যার যার হিসাব (শুধু মালিক)": "Each customer's account on WhatsApp, one by one (owner only)", "ক্লাউড সিঙ্ক": "Cloud sync", "স্টাফের ফোনেও একই হিসাব (শুধু মালিক)": "Same accounts on staff's phone too (owner only)", "সংস্করণ ১১.০": "Version 11.0", "আপনার ব্যবসার হিসাব রাখার সহজ সমাধান": "An easy way to keep your business accounts"};
let LANG = 'bn';
try { LANG = localStorage.getItem('bkLang') === 'en' ? 'en' : 'bn'; } catch (e) {}
const I18N_RULES = [
    [/^(\d+)\s*জনের$/, '$1 customer(s)'],
    [/^(\d+)\s*জন$/, '$1 customers']
];
Object.assign(EN_DICT, {"ডেভেলপারের পরিচয়":"Developer","জাহিদুল ইসলাম (ছিদ্দিক)":"ZAHIDUL ISLAM (CIDDIQ)","নোয়াখালী, চাপরাশিরহাট ৩৮১১":"Noakhali, ChaprashirHat 3811","বাংলাদেশ":"Bangladesh","যেমন: সিদ্দিক":"e.g. Ciddiq","যেমন: সাজ্জাদ":"e.g. Sajjad","যেমন: জাহিদুল":"e.g. Zahidul","যেমন: সামিরা স্টোর":"e.g. Samira Store","যেমন: zahidul":"e.g. zahidul","যেমন: শারমিন":"e.g. Sharmin","থিম ও রং": "Theme & colors", "ডিফল্ট": "Default", "মিডনাইট": "Midnight", "ওশান": "Ocean", "গ্লাস": "Glass", "সানসেট": "Sunset", "পছন্দের রং বেছে নিন। শুধু এই ফোনে/ব্রাউজারে বদলাবে।": "Pick your colors. Applies only on this phone/browser.", "নতুন কাস্টমার": "New customer", "নতুন কাস্টমার যোগ করুন এবং হিসাব শুরু করুন": "Add a new customer and start the account", "কাস্টমারের নাম": "Customer's name", "হোয়াটসঅ্যাপ নম্বর (কোডসহ)": "WhatsApp number (with country code)", "কাস্টমার যোগ করুন": "Add customer", "আইটেম ম্যানেজ": "Manage items", "নতুন আইটেমের নাম": "New item name", "হিসাবের ধরন": "Account type", "সংখ্যা × দাম": "Quantity × price", "যেমন কার্টুন, পিস": "e.g. carton, piece", "ফ্রি": "Free", "পরিমাণ+টাকা": "Quantity + amount", "শুধু টাকা": "Amount only", "রিচার্জ": "Recharge", "একক (শব্দ)": "Unit (word)", "— কেস/কার্টুন/পিস/প্যাকেট। বেছে নিন": "— case / carton / piece / packet. Choose one", "এই আইটেমের স্টক রাখুন": "Keep stock for this item", "কম হলে সতর্কতা": "Low-stock alert", "— এই সংখ্যা বা এর কমে লাল দেখাবে (ঐচ্ছিক)": "— shows red at or below this number (optional)", "ডিফল্ট দাম": "Default price", "— প্রতি এক একক (পিস/প্যাকেট) এর দাম (ঐচ্ছিক)": "— price per unit (piece/packet) (optional)", "কত দিন পর মনে করাবে": "Remind after how many days", "— ঐচ্ছিক। যেমন রিচার্জে ২৯": "— optional. e.g. 29 for recharge", "নতুন আইটেম যোগ করুন": "Add new item", "বর্তমান আইটেম তালিকা": "Current item list", "টাকা": "Amount", "যেমন: করিম আলী": "e.g. Karim Ali", "যেমন: 88018XXXXXXXX": "e.g. 88018XXXXXXXX", "যেমন: চাল, ডাল, পানি...": "e.g. rice, lentils, water...", "নিজে লিখুন (যেমন: ডজন)": "Type your own (e.g. dozen)", "যেমন: ৫": "e.g. 5", "যেমন: ১০": "e.g. 10", "যেমন: ২৯": "e.g. 29", "নগদ": "Cash", "বাকি": "Due", "জমা": "Payment", "পরিবর্তন": "Change", "ডিলিট": "Delete", "হিস্টোরি": "History", "নোট": "Note", "নোট (শুধু মালিক)": "Note (owner only)", "আছে": "Yes", "তারিখ": "Date", "বিবরণ": "Details", "কোনো বিল নেই": "No bills", "সব পরিশোধিত": "All paid", "পরিশোধিত": "Paid", "মোট বিল": "Total bill", "মোট জমা": "Total paid", "টাকা জমা নিন": "Collect payment", "আজকে কী নিলো যোগ করুন": "Add what they took today", "পরিমাণ": "Quantity", "দাম/পিস": "Price/pc", "মোট টাকা": "Total amount", "সেভ করুন": "Save", "যোগ করেছেন": "Added by", "বর্তমান বাকি": "Current due", "আগের": "Previous", "এন্ট্রি করেছিলেন": "Entered by", "স্টকে আছে": "In stock", "কোনো কাস্টমার নেই": "No customers", "ক্যালকুলেটর": "Calculator", "লিখলে পুরো বাকি টাকা অটো জমা হবে": "Type p to auto-fill the full due amount", "জমার পরিমাণ": "Payment amount", "বাতিল": "Cancel", "জমা দিন": "Submit payment", "টাকা লিখুন বা p লিখুন": "Enter amount or type p", "পুরো কিবোর্ড চালু করুন": "Show full keyboard", "হিসাব এডিট করুন": "Edit entry", "নতুন বিবরণ": "New details", "নতুন টাকা": "New amount", "নাম ও নম্বর পরিবর্তন": "Change name & number", "নাম": "Name", "ফোন নম্বর": "Phone number", "কাস্টমার নোট (শুধু মালিক)": "Customer note (owner only)", "কাস্টমার": "Customer", "সম্পর্কে যা মনে রাখতে চান লিখুন": "— write what you want to remember.", "এই নোট শুধু মালিকের দেখার জন্য": "This note is for the owner only", "মুছুন": "Clear", "যেমন: বাড়ি ৫ নম্বর রোডে...": "e.g. House on Road 5...", "নিশ্চিত করুন": "Please confirm", "হ্যাঁ, ডিলিট করুন": "Yes, delete", "লেনদেনের পাসওয়ার্ড দিন": "Enter transaction password", "এই পাসওয়ার্ড মালিক ও স্টাফ উভয়ের কাছে থাকবে": "Both owner and staff will have this password", "নিরাপত্তার স্বার্থে পাসওয়ার্ড দিন": "Enter your password for security", "ওকে": "OK", "বিক্রি এন্ট্রি নিশ্চিত করুন": "Confirm sale entry", "হিসাব এডিট করতে পাসওয়ার্ড দিন": "Enter password to edit", "সঠিক পাসওয়ার্ড দিলে এডিট স্ক্রিন আসবে": "The edit screen opens after the correct password", "টাকা জমা নিশ্চিত করুন": "Confirm payment", "হিসাব ডিলিট করতে পাসওয়ার্ড দিন": "Enter password to delete", "জমা ডিলিট করতে পাসওয়ার্ড দিন": "Enter password to delete payment", "সঠিক পাসওয়ার্ড দিলে ডিলিটের নিশ্চিতকরণ আসবে": "Delete confirmation appears after the correct password", "এই হিসাবটি ডিলিট করবেন": "Delete this entry", "এই জমার রেকর্ড ডিলিট করবেন": "Delete this payment record", "কাস্টমারের ছবি দিন": "Add customer's photo", "ক্যামেরা দিয়ে তুলুন": "Take with camera", "এখনই ছবি উঠান": "Take a photo now", "গ্যালারি থেকে বাছুন": "Choose from gallery", "ফোনে সেভ করা ছবি": "A photo saved on the phone", "বন্ধ করুন": "Close", "কাস্টমারকে জানাবেন": "Notify the customer", "এই কাস্টমারের ফোন নম্বর নেই বা খুব ছোট। পাঠালে WhatsApp-এ নিজে কাস্টমার বেছে নিতে হবে।": "This customer's phone number is missing or too short. You'll need to pick the customer yourself in WhatsApp.", "এখন না": "Not now", "পাঠান": "Send", "আবার কেনার সময় হয়েছে": "due to buy again", "রিচার্জ অ্যাপ বাছুন": "Choose recharge app", "বাছা মুছুন": "Clear choice", "বন্ধ": "Close", "অ্যাপের নাম খুঁজুন": "Search app name", "আজকের লেনদেন": "Today's transactions", "শেষ ৭ দিনের লেনদেন": "Last 7 days transactions", "শেষ ১৫ দিনের লেনদেন": "Last 15 days transactions", "শেষ ৩০ দিনের লেনদেন": "Last 30 days transactions", "একটি তারিখ নির্বাচন করুন": "Select a date", "🔒 দোকানের তথ্য শুধু মালিক পরিবর্তন করতে পারবেন।": "🔒 Only the owner can change shop details.", "আইটেমের নাম লিখুন!": "Enter the item name!", "❌ এই আইটেম আগে থেকেই আছে!": "❌ This item already exists!", "স্টকের একক লিখুন (যেমন: পিস, প্যাকেট)": "Enter the stock unit (e.g. piece, packet)", "একক হলো শব্দ, সংখ্যা নয়।": "The unit is a word, not a number.", "যেমন: পিস, প্যাকেট, কার্টুন।": "e.g. piece, packet, carton.", "📦 এই আইটেমের স্টক চালু আছে।": "📦 Stock is on for this item.", "আগে ✏️ চেপে স্টক বন্ধ করুন, তারপর ডিলিট করুন।": "First press ✏️ and turn stock off, then delete.", "❌ স্টকের একক লিখুন (যেমন: পিস, প্যাকেট)": "❌ Enter the stock unit (e.g. piece, packet)", "❌ একক হলো শব্দ, সংখ্যা নয় (যেমন: পিস, প্যাকেট, কার্টুন)": "❌ The unit is a word, not a number (e.g. piece, packet, carton)", "স্টক বন্ধ করলে আগের হিসাব মুছবে না, আবার চালু করলে ফিরে আসবে।": "Turning stock off keeps the old records; they return when you turn it on again.", "স্টক বন্ধ করলে আগের হিসাব মুছবে না।": "Turning stock off keeps the old records.", "✅ কাস্টমার যোগ হয়েছে!": "✅ Customer added!", "সঠিক টাকা লিখুন": "Enter a valid amount", "পরিমাণ লিখুন": "Enter the quantity", "সঠিক তথ্য দিন": "Enter valid details", "তারিখ নির্বাচন করুন": "Select a date", "❌ এই কাস্টমারের কোনো বাকি নেই!": "❌ This customer has no due!", "সঠিক পরিমাণ লিখুন": "Enter a valid quantity", "নাম খালি রাখা যাবে না": "Name cannot be empty", "সঠিক ফোন নম্বর লিখুন": "Enter a valid phone number", "🔒 নাম আর বদলানো যাবে না": "🔒 The name cannot be changed any more", "তবুও সেভ করবেন?": "Save anyway?"});

Object.assign(EN_DICT, {"বার্তার ভাষা:":"Message language:"});
Object.assign(EN_DICT, {"📝 নোট (শুধু মালিক)":"📝 Note (owner only)","📞 হোয়াটসঅ্যাপ নম্বর (কোডসহ):":"📞 WhatsApp number (with country code):","⚙️ আইটেম ম্যানেজ":"⚙️ Manage items"});
Object.assign(EN_DICT, {"আপনার ব্যবসার সারসংক্ষেপ": "Your business summary", "পরিশোধিত কাস্টমার": "Customers fully paid", "বাকি আছে": "Have due", "বিক্রির হিসাব": "Sales summary", "🌙 দিনের হিসাব মেলান": "🌙 Close the day", "গতকাল": "Yesterday", "গত ৭ দিন": "Last 7 days", "এই মাস": "This month", "গত মাস": "Last month", "📅 তারিখ বাছুন": "📅 Pick a date", "নগদ বিক্রি": "Cash sales", "বাকিতে বিক্রি": "Credit sales", "বাকি আদায় (জমা)": "Dues collected (payments)", "মোট বিক্রি": "Total sales", "এই সময়ে কোনো বিক্রি নেই": "No sales in this period", "যাদের সবচেয়ে বেশি বাকি": "Highest dues", "মাল তোলা, বিক্রি ও এখন কত আছে": "Stock in, sold and what is left", "📤 স্টকের হিসাব পাঠান": "📤 Send stock report", "মোট তোলা": "Total received", "এখন আছে": "In stock now", "মাল তোলা (দোকানে উঠেছে)": "Stock in (received at shop)", "কোন আইটেম:": "Which item:", "কত উঠলো:": "How much received:", "✅ স্টকে যোগ করুন": "✅ Add to stock", "মাল তোলার তালিকা": "Stock-in list", "কার্টুন": "carton", "পিস": "pc", "প্যাকেট": "packet", "কেস": "case", "(কার্টুন)": "(carton)", "(পিস)": "(pc)", "(প্যাকেট)": "(packet)", "⚠️ কম (5 বা কম)": "⚠️ Low (5 or less)", "যেমন: ৫০": "e.g. 50", "👥 নতুন ইউজার যোগ করুন": "👥 Add new user", "ইউজারের ধরন:": "User type:", "এন্ট্রি করতে পারবে": "Can make entries", "👁️ তদারকি": "👁️ Viewer", "শুধু দেখবে": "View only", "💡 স্টাফ পরে নিজের পাসওয়ার্ড ও সিকিউরিটি প্রশ্ন বদলাতে পারবে।": "💡 The staff member can change their own password and security question later.", "যেমন: রহিম": "e.g. Rahim", "👥 স্টাফ তালিকা": "👥 Staff list", "➕ নতুন স্টাফ যোগ করুন": "➕ Add new staff", "📸 আপনার ছবি দিন": "📸 Add your photo", "🏪 দোকানের তথ্য পরিবর্তন": "🏪 Edit shop details", "🔒 পরিবর্তনের জন্য পাসওয়ার্ড দিন": "🔒 Enter password to make changes", "মোবাইল নম্বর:": "Mobile number:", "ঠিকানা:": "Address:", "📝 কাস্টমার নোট (শুধু মালিক)": "📝 Customer note (owner only)", "⚠️ এই নোট শুধু মালিকের দেখার জন্য।": "⚠️ This note is for the owner only.", "✏️ হিসাব এডিট করুন": "✏️ Edit entry", "✏️ নাম ও নম্বর পরিবর্তন": "✏️ Change name & number", "ধাপ ১ — সিকিউরিটি প্রশ্ন যাচাই": "Step 1 — Verify security question", "হিন্ট: উত্তর শুরু হয়": "Hint: the answer starts with", "দিয়ে": "", "আপনার উত্তর:": "Your answer:", "যাচাই করুন": "Verify", "উত্তর লিখুন": "Type the answer", "🔐 লেনদেনের পাসওয়ার্ড পরিবর্তন": "🔐 Change transaction password", "বর্তমান লেনদেন পাসওয়ার্ড:": "Current transaction password:", "নতুন লেনদেন পাসওয়ার্ড:": "New transaction password:", "নতুন পাসওয়ার্ড আবার:": "New password again:", "🛡️ সিকিউরিটি প্রশ্ন সেট করুন": "🛡️ Set security question", "পাসওয়ার্ড ভুলে গেলে এই প্রশ্নের উত্তর দিয়ে নতুন পাসওয়ার্ড সেট করতে পারবেন।": "If you forget your password, you can set a new one by answering this question.", "প্রশ্ন নির্বাচন করুন:": "Choose a question:", "প্রশ্নের উত্তর:": "Answer:", "🔓 পাসওয়ার্ড ভুলে গেছেন?": "🔓 Forgot your password?", "ধাপ ১ — ইউজারনেম দিন": "Step 1 — Enter username", "যার পাসওয়ার্ড ভুলে গেছেন তার ইউজারনেম লিখুন": "Enter the username of the account whose password you forgot", "পরবর্তী →": "Next →", "⚠️ নিশ্চিত করুন": "⚠️ Please confirm", "✏️ আইটেম সেটিংস": "✏️ Item settings", "— ঐচ্ছিক। ফাঁকা = বন্ধ": "— optional. Empty = off", "— কার্টুন/পিস/প্যাকেট। বেছে নিন": "— carton / piece / packet. Choose one", "📦 স্টক রাখুন": "📦 Keep stock", "🔴 যাদের বাকি আছে": "🔴 With dues", "👥 সবার হিসাব": "👥 Everyone", "কেউ না": "None", "ব্যাক করলে নিজে থেকে পরেরজন খুলুক": "Open the next person automatically when I go back", "শুরু চাপলে প্রথমজনের WhatsApp খুলবে।": "Pressing Start opens WhatsApp for the first person.", "চেপে": "Press", "ব্যাক": "Back", "চাপুন। ফিরে এসে \"পরের জন\" বাটন চাপলে (বা টিক দিলে নিজে থেকে) পরেরজন খুলবে।": ". Come back and press \"Next person\" (or tick the box above to do it automatically) to open the next one.", "▶ একটানা পাঠানো শুরু করুন": "▶ Start sending one by one", "📄 সব কাস্টমারের হিসাব (PDF)": "📄 All customers report (PDF)", "কোন পণ্যের হিসাব চাই:": "Which item do you want:", "✅ সব পণ্য": "✅ All items", "📁 হিস্টোরিসহ (পরিশোধ হয়ে যাওয়া পুরনো হিসাব)": "📁 Include history (old settled accounts)", "🔴 শুধু যাদের বাকি আছে": "🔴 Only those with dues", "তারিখ (ঐচ্ছিক):": "Date (optional):", "💡 PDF তৈরি হলে সেভ/শেয়ার করার বাটন আসবে।": "💡 Save/share buttons will appear once the PDF is ready.", "📄 PDF বানান": "📄 Create PDF", "✅ PDF তৈরি হয়েছে": "✅ PDF is ready", "📤 শেয়ার / সেভ (WhatsApp, ফাইল…)": "📤 Share / Save (WhatsApp, file…)", "⬇️ ডাউনলোড": "⬇️ Download", "🖨️ প্রিন্ট স্ক্রিনে খুলুন": "🖨️ Open print screen", "কাকে দেবেন:": "Send to:", "নোটিশ:": "Notice:", "📤 নোটিশ পাঠান": "📤 Send notice", "আগের নোটিশ:": "Previous notices:", "যেমন: আজ আমি বাইরে আছি। বিকালে ২০ কার্টুন মাল আসবে, ১২,০০০ টাকা দিয়ে রিসিভ করে নিও।": "e.g. I am out today. 20 cartons of stock arrive in the evening; receive them and pay 12,000 Tk.", "✂️ ছবি ঠিক করুন": "✂️ Adjust photo", "☝️ ছবি টেনে সরান  ·  নিচের স্লাইডারে বড়-ছোট করুন": "☝️ Drag the photo to move · use the slider to zoom", "✅ ঠিক আছে": "✅ OK", "☁️ ক্লাউড সিঙ্ক": "☁️ Cloud sync", "☁️ দোকানে যুক্ত হন": "☁️ Join a shop", "মালিকের কাছ থেকে": "Get the", "দোকান কোড": "shop code", "দোকান কোড:": "Shop code:", "নিন (সেটিংস → ক্লাউড সিঙ্ক)। যুক্ত হলে নিজের ইউজারনেম-পাসওয়ার্ডে লগইন করবেন।": "from the owner (Settings → Cloud sync). After joining, log in with your own username and password.", "☁️ যুক্ত হন": "☁️ Join", "💸 টাকা দিলাম": "💸 I paid", "কত টাকা দিলেন:": "How much did you pay:", "যেমন: ৩১৫০": "e.g. 3150", "📤 কোন আইটেমের হিসাব পাঠাবেন?": "📤 Which item report to send?", "📄 হিসাব দেখুন": "📄 View report", "📤 সরবরাহকারীর হিসাব": "📤 Supplier statement", "📋 কপি": "📋 Copy", "💾 ব্যাকআপ নেওয়ার সময় হয়েছে": "💾 Time to take a backup", "পরে": "Later", "💾 এখনই ব্যাকআপ নিন": "💾 Back up now", "💵 ক্যাশ গুনে হাতে পেয়েছেন কত:": "💵 Cash counted in hand:", "যেমন: ৩৫০০": "e.g. 3500", "👁️ দেখার অনুমতি": "👁️ View permission", "কোন কোন পণ্য দেখতে পারবে?": "Which items can they see?", "📞 কাস্টমারের মোবাইল নম্বর দেখতে পারবে": "📞 Can see customers' mobile numbers", "সিকিউরিটি প্রশ্ন যাচাই করে বদলান": "Verify security question to change", "লেনদেনের পাসওয়ার্ড": "Transaction password", "শুধু মালিক পরিবর্তন করতে পারবেন": "Only the owner can change this", "ফিঙ্গারপ্রিন্ট লগইন": "Fingerprint login", "শুধু APK অ্যাপে চলে": "Works only in the APK app", "সিকিউরিটি প্রশ্ন": "Security question", "পাসওয়ার্ড রিকভারির প্রশ্ন সেট করুন": "Set the password recovery question", "🗑️ ডিলিট লগ (শুধু মালিক)": "🗑️ Delete log (owner only)", "🧹 পুরোনো লগ নিজে মুছুক:": "🧹 Auto-clear old logs:", "⚠️ ফোনের স্টোরেজ ভর্তি, ডেটা সেভ হয়নি!": "⚠️ Phone storage is full, data was not saved!", "ছবি ডিলিট করুন বা ব্যাকআপ নিয়ে রাখুন।": "Delete photos or take a backup.", "🔒 এই কাজটি শুধু মালিক করতে পারবেন।": "🔒 Only the owner can do this.", "লগআউট করতে চান?": "Do you want to log out?", "শুধু ছবি দিন": "Please choose an image only", "ছবি ১৫ MB এর কম হতে হবে": "The photo must be under 15 MB", "ছবিটি খোলা যায়নি": "The photo could not be opened", "❌ আপনার সিকিউরিটি প্রশ্ন সেট করা নেই।": "❌ Your security question is not set.", "আগে \"সিকিউরিটি প্রশ্ন সেট\" থেকে প্রশ্ন সেট করুন।": "First set a question from \"Set security question\".", "✅ পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!": "✅ Password changed successfully!", "✅ সিকিউরিটি প্রশ্ন সেভ হয়েছে!": "✅ Security question saved!", "❌ অ্যাকাউন্ট খুঁজে পাওয়া যায়নি": "❌ Account not found", "❌ আপনার সিকিউরিটি প্রশ্ন সেট করা নেই। সেটিংস থেকে সেট করুন।": "❌ Your security question is not set. Set it from Settings.", "ইউজারনেম:": "Username:", "নতুন পাসওয়ার্ড:": "New password:", "পাসওয়ার্ড:": "Password:", "✅ তদারকি ইউজার যোগ হয়েছে!": "✅ Viewer user added!", "✅ স্টাফ সফলভাবে যোগ হয়েছে!": "✅ Staff added successfully!", "❌ লেনদেনের পাসওয়ার্ড সেট করা নেই। সেটিংস থেকে সেট করুন।": "❌ Transaction password is not set. Set it from Settings.", "✅ লেনদেনের পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!": "✅ Transaction password changed successfully!", "✅ দোকানের তথ্য সেভ হয়েছে!": "✅ Shop details saved!", "✅ ডাটা রিস্টোর হয়েছে!": "✅ Data restored!", "নিরাপত্তার জন্য আবার লগইন করুন।": "Please log in again for security.", "❌ ফাইল ফরম্যাট সঠিক নয়": "❌ Invalid file format", "🔒 নোট শুধু মালিক দেখতে পারেন": "🔒 Only the owner can see notes", "🔒 ডিলিট লগ শুধু মালিক দেখতে পারেন।": "🔒 Only the owner can see the delete log.", "কোনো আইটেমে স্টক চালু নেই": "No item has stock turned on", "অন্তত একটা আইটেম বাছুন": "Choose at least one item", "📋 হিসাব কপি হয়েছে": "📋 Statement copied", "আইটেম বেছে নিন": "Choose an item", "এই নোটিশ মুছে ফেলবেন?": "Delete this notice?", "☁️ দোকানের কোড বদলানো হয়েছে। নতুন কোড দিয়ে আবার যুক্ত হন।": "☁️ The shop code has changed. Join again with the new code.", "(এখন আবার সিঙ্ক করা হচ্ছে)": "(syncing again now)", "✅ কপি হয়েছে": "✅ Copied", "কোড কপি করুন:": "Copy the code:", "কোড বদলালে সব স্টাফের ফোনে নতুন কোড দিতে হবে। এগিয়ে যাবেন?": "If you change the code, every staff phone needs the new code. Continue?", "এই ফোনে সিঙ্ক বন্ধ করবেন? ফোনের ডেটা থাকবে, ক্লাউডের ডেটাও থাকবে।": "Turn off sync on this phone? Phone data and cloud data will both stay.", "✅ এন্ট্রির পর WhatsApp বার্তার পপআপ চালু হলো": "✅ WhatsApp message popup after entries is on", "⏸️ পপআপ বন্ধ হলো": "⏸️ Popup turned off", "(অ্যাপ খোলার সুবিধা শুধু APK-তে চলে)": "(opening apps works only in the APK)", "রিচার্জের অ্যাপ এখনও বাছা নেই। সেটিংস → \"রিচার্জ অ্যাপ\" থেকে বাছুন।": "No recharge app chosen yet. Choose one from Settings → \"Recharge app\".", "\" অ্যাপটি ফোনে পাওয়া যায়নি। সেটিংসে আবার বাছুন।": "\" app was not found on the phone. Choose again in Settings.", "এই সুবিধা শুধু APK অ্যাপে চলে। ব্রাউজারে অ্যাপ বাছা যায় না।": "This feature works only in the APK app. Apps cannot be chosen in a browser.", "ফিঙ্গারপ্রিন্ট লগইন শুধু APK অ্যাপে চলে।": "Fingerprint login works only in the APK app.", "এই ফোনে আপনার ফিঙ্গারপ্রিন্ট লগইন বন্ধ করবেন?": "Turn off fingerprint login on this phone?", "⏸️ ফিঙ্গারপ্রিন্ট লগইন বন্ধ হলো": "⏸️ Fingerprint login turned off", "এই ফোনে ফিঙ্গারপ্রিন্ট সুবিধা পাওয়া যায়নি।": "Fingerprint is not available on this phone.", "আগে ফোনের সেটিংসে নিজের ফিঙ্গারপ্রিন্ট সেট করুন, তারপর এখানে চালু করুন।": "First set up your fingerprint in the phone settings, then turn it on here.", "👆 ফিঙ্গারপ্রিন্ট শুধু এই অ্যাপে ঢোকার (লগইন) জন্য।": "👆 Fingerprint is only for logging in to this app.", "লেনদেন, পিন বা পাসওয়ার্ড বদলের জন্য নয়।": "Not for transactions, PINs or password changes.", "মনে রাখবেন: এই ফোনে যাদের ফিঙ্গারপ্রিন্ট দেওয়া আছে, সবাই এই অ্যাকাউন্টে ঢুকতে পারবে।": "Remember: anyone whose fingerprint is saved on this phone can enter this account.", "চালু করবেন?": "Turn it on?", "✅ চালু হলো। এরপর লগইন পেজে 👆 বাটন চাপলে ফিঙ্গারপ্রিন্টে ঢুকতে পারবেন।": "✅ Turned on. Next time, press the 👆 button on the login page to log in with your fingerprint.", "শুধু লগইনের জন্য — লেনদেনের পাসওয়ার্ড আগের মতোই লাগবে।": "For login only — the transaction password is still required.", "❌ ফিঙ্গারপ্রিন্ট চালু হয়নি। আবার চেষ্টা করুন।": "❌ Fingerprint was not turned on. Please try again.", "📋 নম্বর কপি হয়েছে:": "📋 Number copied:", "প্রশ্ন:": "Question:"});

I18N_RULES.push(
    [/^📋 নম্বর কপি হয়েছে: (.*)$/, '📋 Number copied: $1'],
    [/^ইউজারনেম: (.*)$/, 'Username: $1'],
    [/^প্রশ্ন: (.*)$/, 'Question: $1'],
    [/^নতুন পাসওয়ার্ড: (.*)$/, 'New password: $1'],
    [/^পাসওয়ার্ড: (.*)$/, 'Password: $1'],
    [/^হিন্ট: "(.*)"$/, 'Hint: "$1"'],
    [/^✅ রিচার্জ অ্যাপ: (.*)$/, '✅ Recharge app: $1'],
    [/^❌ PDF বানানো যায়নি: (.*)$/, '❌ Could not create PDF: $1'],
    [/^কত (.*) উঠলো লিখুন$/, 'Enter how many $1 were received'],
    [/^"(.*)" অ্যাপটি ফোনে পাওয়া যায়নি। সেটিংসে আবার বাছুন।$/, 'The "$1" app was not found on the phone. Choose again in Settings.'],
    [/^"?(.*)" অ্যাপটি ফোনে পাওয়া যায়নি। সেটিংসে আবার বাছুন।$/, '"$1" app was not found on the phone. Choose again in Settings.'],
    [/^(\d+)\/৫০০$/, '$1/500']
);
const I18N_UNITS = { 'কার্টুন': 'carton', 'কেস': 'case', 'পিস': 'pc', 'প্যাকেট': 'packet', 'পরিমাণ': 'qty', 'ডজন': 'dozen', 'বস্তা': 'sack', 'কেজি': 'kg', 'গ্রাম': 'gram', 'লিটার': 'liter', 'বোতল': 'bottle', 'বান্ডিল': 'bundle', 'জোড়া': 'pair', 'মিটার': 'meter', 'ফুট': 'ft', 'কৌটা': 'can', 'টিন': 'tin', 'ব্যাগ': 'bag', 'সেট': 'set', 'রিম': 'ream' };
const I18N_UNIT_RE = Object.keys(I18N_UNITS).filter(k => k !== 'পরিমাণ').join('|');
const I18N_SUBS = [
    [/(\d[\d.]*)\s*(কার্টুন|কেস|পিস|প্যাকেট|পরিমাণ|ডজন|বস্তা|কেজি|গ্রাম|লিটার|বোতল|বান্ডিল|জোড়া|মিটার|ফুট|কৌটা|টিন|ব্যাগ|সেট|রিম)/g, (m, n, u) => n + ' ' + I18N_UNITS[u]],
    [/একক: (কার্টুন|কেস|পিস|প্যাকেট)/g, (m, u) => 'Unit: ' + I18N_UNITS[u]],
    [new RegExp('\\((' + I18N_UNIT_RE + ')\\)', 'g'), (m, u) => '(' + I18N_UNITS[u] + ')'],
    [/\((কার্টুন|কেস|পিস|প্যাকেট)\)/g, (m, u) => '(' + I18N_UNITS[u] + ')'],
    [/একক: /g, 'Unit: '],
    [/স্টক চালু/g, 'stock on'],
    [/(^|\s)(কার্টুন|কেস|পিস|প্যাকেট)(?= — )/g, (m, a, u) => a + I18N_UNITS[u]],
    [/ — শেষ!/g, ' — out of stock!'],
    [/ — কম আছে/g, ' — running low'],
    [/ সংখ্যা$/g, ' qty']
];

I18N_RULES.push(
    [/^(-?[\d.,]+)\s*টাকা$/, '$1 Tk'],
    [/^"(.*)" যোগ হয়েছে$/, '"$1" added'],
    [/^✅ "(.*)" যোগ হয়েছে$/, '✅ "$1" added'],
    [/^"(.*)" আইটেমটি ডিলিট করবেন\??$/, 'Delete the item "$1"?'],
    [/^"(.*)" এর অ্যাকাউন্ট ডিলিট করবেন\??$/, 'Delete the account of "$1"?'],
    [/^✏️ (.+) পরিবর্তন: (.+)$/, '✏️ $1 changed: $2'],
    [/^👤 টাকা নিচ্ছেন: (.*) \(মালিক\)$/, '👤 Collected by: $1 (Owner)'],
    [/^👤 টাকা নিচ্ছেন: (.*) \(স্টাফ\)$/, '👤 Collected by: $1 (Staff)'],
    [/^👤 (.*) — জমা (.*) ৳$/, '👤 $1 — payment $2 ৳'],
    [/^👤 (.*) — (.*) — (.*) ৳ — 💵 নগদ$/, '👤 $1 — $2 — $3 ৳ — 💵 Cash'],
    [/^👤 (.*) — (.*) — (.*) ৳ — 📒 বাকি$/, '👤 $1 — $2 — $3 ৳ — 📒 Due'],
    [/^(কার্টুন|কেস|পিস|প্যাকেট) সংখ্যা$/, (m, u) => 'Number of ' + I18N_UNITS[u] + 's'],
    [/^দাম\/(কার্টুন|কেস|পিস|প্যাকেট)$/, (m, u) => 'Price/' + I18N_UNITS[u]],
    [/^কার্টুন সংখ্যা$/, 'Number of cartons'],
    [/^(\S+) সংখ্যা$/, 'Qty ($1)'],
    [/^দাম\/(\S+)$/, 'Price/$1'],
    [/^⚠️ (.*) স্টকে আছে (.*) (\S+), আপনি (.*) (\S+) দিচ্ছেন।$/, '⚠️ $1 has $2 $3 in stock, you are giving $4 $5.'],
    [/^নাম "(.*)" থেকে "(.*)" করবেন\?$/, 'Change the name from "$1" to "$2"?'],
    [/^\(নাম সর্বোচ্চ (\d+) বার বদলানো যায়। এটা (\d+) নম্বর বদল।\)$/, '(The name can be changed at most $1 times. This is change number $2.)'],
    [/^নাম সর্বোচ্চ (\d+) বার বদলানো যায় — এ পর্যন্ত (\d+) বার বদলানো হয়েছে$/, 'The name can be changed at most $1 times — changed $2 time(s) so far'],
    [/^🔒 নাম আর বদলানো যাবে না \(সর্বোচ্চ (\d+) বার বদলানো হয়ে গেছে\)$/, '🔒 The name cannot be changed any more (already changed $1 times)']
);
Object.assign(EN_DICT, {"☝️ ছবি টেনে সরান · নিচের স্লাইডারে বড়-ছোট করুন":"☝️ Drag the photo to move · use the slider to zoom"});
Object.assign(EN_DICT, {"✅ আপডেট হয়েছে": "✅ Updated", "✅ নতুন করে সাজানো হয়েছে": "✅ Refreshed", "❌ দোকান কোড দিন (সেটিংস → ক্লাউড সিঙ্ক)": "❌ Enter the shop code (Settings → Cloud sync)", "❌ আপডেট হয়নি — ইন্টারনেট দেখুন": "❌ Not updated — check the internet", "💡 পেমেন্ট সাজেশনের রেঞ্জ": "💡 Payment suggestion range", "— কাস্টমার বাকির চেয়ে কত টাকা পর্যন্ত বেশি দিলেও এই আইটেমের পেমেন্ট সাজেস্ট হবে। ফাঁকা = সাজেশন বন্ধ": "— the item is suggested if the customer pays up to this much above the amount due. Empty = no suggestion", "✅ নিশ্চিত করুন": "✅ Confirm", "পরে ঠিক করব — শুধু মোট বাকি থেকে কাটো": "Decide later — just deduct from the total due", "কিছু বাছা হয়নি — পুরোটাই সাধারণ জমা হিসেবে যাবে": "Nothing selected — the whole amount goes to general payment", "❌ টাকা কম পড়ছে — আগে অন্যটা বাদ দিন": "❌ Not enough amount — untick another first", "📒 যাদের কাছে বাকি আছে": "📒 Who still owes", "✅ শোধ": "✅ Paid", "📅 নতুন দাম কোন তারিখ থেকে": "📅 New price applies from", "— দাম বদলালে শুধু এই তারিখ থেকে নতুন দাম লাগবে, আগের বিক্রি পুরনো দামেই থাকবে": "— if you change the price, the new price applies only from this date; earlier sales stay at the old price", "✏️ আইটেমের নাম": "✏️ Item name", "— বদলালে আগের সব হিসাবেও নতুন নাম হবে": "— changing it renames it in all past entries too", "❌ নাম লিখুন": "❌ Enter a name", "❌ এই নামে আরেকটা আইটেম আছে": "❌ Another item has this name", "🖼️ আইকন": "🖼️ Icon", "— চাপলে বদলাবে (ঐচ্ছিক)": "— tap to change (optional)", "বাকি মিটিয়েছে": "Cleared dues", '🔕 ১ দিন পরে': '🔕 In 1 day', '🔕 ৩ দিন পরে': '🔕 In 3 days'});
I18N_RULES.push([/^💰 ([\d.,]+) ৳ কোন আইটেমের পেমেন্ট\?$/, '💰 Which item is the $1 ৳ payment for?'], [/^👤 (.+) — যা বাকি আছে:$/, '👤 $1 — still due:'], [/^✅ আইটেমের পেমেন্ট: ([\d.,]+) ৳$/, '✅ Item payment: $1 ৳'], [/^➕ বাকি ([\d.,]+) ৳ → সাধারণ জমা \(মোট বাকি থেকে কাটবে\)$/, '➕ Remaining $1 ৳ → general payment (deducted from total due)'], [/^📒 বাকি ([\d.,]+) ৳$/, '📒 Due $1 ৳'], [/^(\d+) দিন আগে থেকে$/, 'since $1 days ago'], [/^মোট আটকে আছে: ([\d.,]+) ৳$/, 'Total outstanding: $1 ৳'], [/^(.*?) · বাকি ([\d.,০-৯]+) ৳$/, "$1 · Due $2 ৳"],
 [/^(\d+|[০-৯]+)\/(৫০০|500)$/, '$1/500'],
    [/^💵 (\S+) নগদ · 📒 (\S+) বাকি \((কার্টুন|পিস|প্যাকেট|কেস)\)$/, (m, a, b, u) => '💵 ' + a + ' cash · 📒 ' + b + ' due (' + I18N_UNITS[u] + ')']);
Object.assign(EN_DICT, {"💰 বাকি আদায় (জমা নিয়েছেন)": "💰 Dues collected (payments taken)", "💸 সরবরাহকারীকে দিয়েছেন": "💸 Paid to supplier", "🧮 হাতে নগদ থাকার কথা": "🧮 Cash expected in hand", "📒 বাকিতে বিক্রি (টাকা হাতে আসেনি)": "📒 Credit sales (no cash received)", "🧾 মোট বিক্রি": "🧾 Total sales", "💵 নগদ বিক্রি": "💵 Cash sales", "ক্যাশ গুনে নিচের ঘরে লিখুন, অ্যাপ মিলিয়ে দেখাবে": "Count your cash and enter it below; the app will compare it", "✅ হিসাব মিলে গেছে": "✅ The account matches", "আপনাকে এখনো কোনো পণ্য দেখার অনুমতি দেওয়া হয়নি।": "You have not been given permission to view any items yet.", "🔒 শুধু দেখার জন্য — কিছু যোগ বা বদলানো যাবে না": "🔒 View only — nothing can be added or changed", "কে কত নিয়েছে": "Who took how much", "এখনো কোনো বিক্রি নেই": "No sales yet", "বাকি খাতা": "Baki Khata", "সরবরাহকারী": "Supplier", "❌ শেষ": "❌ Out of stock", "পণ্য": "Item"});

I18N_RULES.push(
    [/^⚠️ (\S+) টাকা বেশি আছে — .*$/, '⚠️ $1 Tk extra — check whether you forgot to record a sale or payment'],
    [/^⚠️ (\S+) টাকা কম আছে — .*$/, '⚠️ $1 Tk short — check for an expense or a wrong entry'],
    [/^(.+)কে দিয়েছেন$/, 'Paid to $1'],
    [/^(.+)কে আর দিতে হবে$/, 'Still to pay $1'],
    [/^(.+) বেশি পেয়েছেন$/, '$1 has received extra'],
    [/^💸 (.+)কে টাকা দিলাম$/, '💸 I paid $1'],
    [/^\(প্রতি (\S+) (\S+) ৳\)$/, (m, u, n) => '(per ' + (I18N_UNITS[u] || u) + ': ' + n + ' ৳)'],
    [/^বিক্রি হয়েছে (\S+) (\S+) × (\S+)$/, 'Sold $1 $2 × $3'],
    [/^তোলা (\S+) · বিক্রি (\S+) · আছে (\S+) (\S+)$/, 'In $1 · Sold $2 · Left $3 $4'],
    [/^মোট বিক্রি \((.+)\)$/, 'Total sold ($1)']
);
Object.assign(EN_DICT, {"🗑️ এটা মুছুন":"🗑️ Forget this","👁️ তদারকি":"👁️ Viewer","🧑‍💼 স্টাফ":"🧑‍💼 Staff","অনুমতি":"Permission","➕ যোগ করেছেন:":"➕ Added by:","(স্টাফ)":"(Staff)"});
I18N_RULES.push([/^ফিঙ্গারপ্রিন্ট দিয়ে লগইন — (.*)$/, 'Log in with fingerprint — $1']);
Object.assign(EN_DICT, {"🎉 স্বাগতম! মালিকের সেটআপ": "🎉 Welcome! Owner setup", "⚙️ একবার সেট করুন, সারাজীবন ব্যবহার করুন": "⚙️ Set up once, use for life", "এই তথ্য দিয়ে আপনি (মালিক) অ্যাপে ঢুকবেন। স্টাফ পরে সেটিংস থেকে যোগ করবেন।": "You (the owner) will log in with this information. Add staff later from Settings.", "🏪 ধাপ ১ — দোকানের তথ্য": "🏪 Step 1 — Shop details", "আপনার নাম (মালিক):": "Your name (owner):", "🔑 ধাপ ২ — লগইন তথ্য": "🔑 Step 2 — Login details", "এই ইউজারনেম ও পাসওয়ার্ড দিয়ে আপনি লগইন করবেন।": "You will log in with this username and password.", "আবার লিখুন:": "Type again:", "🔐 ধাপ ৩ — লেনদেনের পাসওয়ার্ড": "🔐 Step 3 — Transaction password", "প্রতিটা লেনদেন (টাকা জমা, বিক্রি এন্ট্রি, হিসাব এডিট) করার সময় এই পাসওয়ার্ড দিতে হবে। মালিক ও স্টাফ উভয়েই এটা ব্যবহার করবেন।": "This password is required for every transaction (payment, sale entry, edit). Both owner and staff will use it.", "🛡️ ধাপ ৪ — সিকিউরিটি প্রশ্ন": "🛡️ Step 4 — Security question", "পাসওয়ার্ড ভুলে গেলে এই প্রশ্নের উত্তর দিয়ে রিকভার করবেন।": "If you forget your password, recover it by answering this question.", "— প্রশ্ন বেছে নিন —": "— Choose a question —", "✏️ নিজের প্রশ্ন লিখুন": "✏️ Write your own question", "নিজের প্রশ্ন:": "Your question:", "নিজের প্রশ্ন লিখুন:": "Write your question:", "🚀 সেটআপ সম্পন্ন করুন": "🚀 Finish setup", "☁️ আগে থেকে দোকান আছে? কোড দিয়ে যুক্ত হন": "☁️ Already have a shop? Join with a code", "যেমন: করিম স্টোর": "e.g. Karim Store", "যেমন: karim": "e.g. karim", "যেমন: আমার দাদার বাড়ির নাম?": "e.g. My grandfather's house name?", "⚖️ ফ্রি": "⚖️ Free", "📷 ছবি পরিবর্তন": "📷 Change photo", "🗑️ ছবি মুছুন": "🗑️ Remove photo", "ছবি পরিবর্তন": "Change photo", "পর্যন্ত": "to", "✅ উত্তর সঠিক! এখন নতুন পাসওয়ার্ড সেট করুন।": "✅ Correct answer! Now set a new password.", "নতুন পাসওয়ার্ড আবার লিখুন:": "Type the new password again:", "ধাপ ২ — সিকিউরিটি প্রশ্নের উত্তর দিন": "Step 2 — Answer the security question", "🤝 সরবরাহকারীর নাম": "🤝 Supplier name", "— মাল যার (ঐচ্ছিক)": "— whose goods these are (optional)", "সরবরাহকারীকে প্রতি একক কত দেবেন": "How much per unit you pay the supplier", "— বিক্রি হলে এই দামে তার পাওনা হবে": "— he is owed this price for each unit sold", "যেমন: মাইকেল": "e.g. Michael", "যেমন: ৪৫": "e.g. 45", "১ সেকেন্ড": "1 second", "২ সেকেন্ড": "2 seconds", "পরের জন →": "Next person →", "⏸ থামান / নতুন করে শুরু": "⏸ Stop / start over", "শুধু লগইনের জন্য (APK-তে)": "For login only (in the APK)", "কখনো না": "Never", "৭ দিন পর": "After 7 days", "১৫ দিন পর": "After 15 days", "৩০ দিন পর": "After 30 days", "বাং": "বাং", "বাকি খাতা (স্টাফ)": "Baki Khata (Staff)", "এখন মনে করিও না": "Do not remind now", "বক্স": "box", "কেজি": "kg", "লিটার": "litre", "— বাছুন (ফাঁকা = কার্টুন) —": "— Choose (empty = carton) —", "✏️ অন্য (নিজে লিখুন)": "✏️ Other (type your own)", "দাম দিলে বিক্রির সময় দাম নিজে বসে যাবে।": "If you set a price, it is filled in automatically when selling.", "ফ্রি ধরনে মোট টাকা বিক্রির সময় নিজে লিখতে হয়।": "For the Free type, you type the total amount when selling.", "কোনো আইটেম নেই।": "No items.", "আগে \"যোগ করুন\" পেজে আইটেম যোগ করুন।": "First add items on the \"Add\" page.", "আপনার ছবিটি ডিলিট করবেন?": "Delete your photo?", "ছবিটি ডিলিট করবেন?": "Delete this photo?", "এখনো কোনো স্টাফ যোগ করা হয়নি।": "No staff added yet.", "এখন কারো মনে করানোর সময় হয়নি।": "No one needs a reminder right now.", "এই সময়ে কিছু নেই।": "Nothing in this period.", "🔕 ৭ দিন পরে": "🔕 In 7 days", "✖ আর মনে করিও না": "✖ Do not remind again", "এখনো কোনো মাল তোলা হয়নি": "No stock received yet", "এখনো কিছু ডিলিট হয়নি।": "Nothing has been deleted yet.", "(এই ফিচার চালুর আগের ডিলিটের রেকর্ড নেই)": "(No records of deletions before this feature started)", "সব লগ দেখুন": "View all logs", "✖ পড়েছি, বন্ধ করুন": "✖ Read, close", "সব স্টাফ": "All staff", "(মুছে ফেলা স্টাফ)": "(deleted staff)", "👥 সব স্টাফ": "👥 All staff", "❌ নোটিশ লিখুন": "❌ Write a notice", "এখনো কোনো নোটিশ নেই": "No notices yet", "🗑️ মুছুন": "🗑️ Delete", "কোড ভুল": "Wrong code", "Firebase-এ Email/Password লগইন চালু নেই": "Email/Password login is not enabled in Firebase", "অনেকবার চেষ্টা হয়েছে, একটু পরে আবার দিন": "Too many attempts, try again later", "Firestore-এর নিরাপত্তা নিয়ম (rules) ঠিক করা নেই": "Firestore security rules are not set up", "ইন্টারনেট নেই বা সংযোগ আটকে আছে": "No internet or the connection is blocked", "দোকান কোড বদলে গেছে": "The shop code has changed", "কোড ২০ অক্ষরের হতে হবে": "The code must be 20 characters", "এটা অন্য দোকানের কোড": "This is another shop's code", "এই কোডে এখনো কোনো ডেটা নেই": "There is no data under this code yet", "⚠️ কোড বদলেছে — নতুন কোড দিন": "⚠️ Code changed — enter the new code", "⏳ সিঙ্ক হচ্ছে…": "⏳ Syncing…", "⏳ শুরু হচ্ছে…": "⏳ Starting…", "✅ সিঙ্ক হয়েছে": "✅ Synced", "⏳ চালু হচ্ছে…": "⏳ Turning on…", "অ্যাকাউন্ট সমস্যা": "Account problem", "⏳ বদলানো হচ্ছে…": "⏳ Changing…", "✅ নতুন কোড তৈরি। অন্য ফোনে এটা দিন।": "✅ New code created. Enter it on the other phones.", "⏳ যুক্ত হচ্ছে…": "⏳ Joining…", "কোড ঠিক নেই": "The code is not correct", "এখন বন্ধ — চাপলে চালু হবে (শুধু মালিক)": "Off now — tap to turn on (owner only)", "এখন চালু — চাপলে বন্ধ হবে (শুধু মালিক)": "On now — tap to turn off (owner only)", "এখনও কোনো অ্যাপ বাছা নেই": "No app chosen yet", "কিছু পাওয়া যায়নি": "Nothing found", "কেউ নেই": "No one", "✓ হয়েছে। এবার নিচের সবুজ বাটন চাপুন।": "✓ Done. Now press the green button below.", "✅ এই ফোনে চালু — চাপলে বন্ধ হবে": "✅ On for this phone — tap to turn off", "এই ফোনে বন্ধ — চাপলে চালু হবে (শুধু লগইনের জন্য)": "Off for this phone — tap to turn on (for login only)", "ফিঙ্গারপ্রিন্ট চালু করুন": "Turn on fingerprint", "শুধু লগইনের জন্য": "For login only", "লগইন": "Log in", "❌ ফিঙ্গারপ্রিন্ট মেলেনি। আবার চেষ্টা করুন বা পাসওয়ার্ড দিন।": "❌ Fingerprint did not match. Try again or enter your password.", "আপনি এখনও একবারও ব্যাকআপ নেননি। ফোন হারালে বা অ্যাপ মুছলে সব হিসাব চলে যেতে পারে।": "You have never taken a backup. If you lose the phone or delete the app, all accounts could be lost.", "দোকানের নাম দিন": "Enter the shop name", "দোকানের নাম": "Shop name", "❌ দোকানের নাম কমপক্ষে ২ অক্ষরের হতে হবে": "❌ Shop name must be at least 2 characters", "❌ আপনার নাম কমপক্ষে ২ অক্ষরের হতে হবে": "❌ Your name must be at least 2 characters", "❌ ইউজারনেম কমপক্ষে ৩ অক্ষরের হতে হবে": "❌ Username must be at least 3 characters", "❌ ইউজারনেমে শুধু ছোট হাতের ইংরেজি, সংখ্যা ও _ ব্যবহার করুন": "❌ Username may only contain lowercase English letters, digits and _", "❌ পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে": "❌ Password must be at least 4 characters", "❌ দুইবার একই পাসওয়ার্ড লিখুন": "❌ Type the same password twice", "❌ লেনদেনের পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে": "❌ Transaction password must be at least 4 characters", "❌ লেনদেনের পাসওয়ার্ড দুইবার একই লিখুন": "❌ Type the same transaction password twice", "❌ একটি সিকিউরিটি প্রশ্ন নির্বাচন করুন": "❌ Choose a security question", "❌ নিজের প্রশ্নটি লিখুন": "❌ Write your own question", "❌ সিকিউরিটি প্রশ্নের উত্তর কমপক্ষে ২ অক্ষরের হতে হবে": "❌ The answer must be at least 2 characters", "❌ ইউজারনেম ও পাসওয়ার্ড দিন": "❌ Enter username and password", "❌ নতুন পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে!": "❌ New password must be at least 4 characters!", "❌ নতুন পাসওয়ার্ড দুইবার একই হয়নি!": "❌ The new passwords do not match!", "❌ একটি প্রশ্ন নির্বাচন করুন": "❌ Choose a question", "❌ উত্তর কমপক্ষে ২ অক্ষরের হতে হবে": "❌ The answer must be at least 2 characters", "❌ এই ইউজারনেম নেই": "❌ This username does not exist", "❌ এই অ্যাকাউন্টে সিকিউরিটি প্রশ্ন সেট করা হয়নি": "❌ No security question is set for this account", "❌ অন্তত একটা পণ্য বাছুন": "❌ Choose at least one item", "❌ নাম কমপক্ষে ২ অক্ষরের হতে হবে": "❌ Name must be at least 2 characters", "❌ এই ইউজারনেম আগে থেকেই আছে": "❌ This username already exists", "❌ কমপক্ষে ৪ অক্ষরের হতে হবে": "❌ Must be at least 4 characters", "❌ দুইবার একই লিখুন": "❌ Type the same twice", "— দেখার অনুমতি": "— view permission", "আপনার মায়ের নাম কী?": "What is your mother's name?", "আপনার প্রথম স্কুলের নাম কী?": "What was the name of your first school?", "আপনার প্রিয় শিক্ষকের নাম কী?": "What is your favourite teacher's name?", "আপনার জন্মশহরের নাম কী?": "What is the name of your birth town?", "আপনার প্রিয় খাবারের নাম কী?": "What is your favourite food?", "আপনার প্রথম বন্ধুর নাম কী?": "What is your first friend's name?", "আপনার প্রিয় রঙের নাম কী?": "What is your favourite colour?", "আপনার প্রথম পোষা প্রাণীর নাম কী?": "What was your first pet's name?", "এই কাস্টমারের": "This customer", "পৃষ্ঠা": "Page", "ধন্যবাদ": "Thank you", "ধরন": "Type", "ফোন:": "Phone:", "ঠিকানা:": "Address:", "তারিখ বাছুন": "Pick a date", "থেকে": "from", "জন": "customers", "কাস্টমার হিসাব": "Customer statement", "সব কাস্টমারের হিসাব": "All customers statement", "সব পণ্য": "All items", "হিস্টোরিসহ": "With history", "শুধু বাকি আছে যাদের": "Only those with dues", "বাকি-বিল": "Due bills", "নগদ বিক্রি (পরিশোধিত)": "Cash sales (paid)", "মোট বাকি": "Total due", "সব পরিশোধিত": "All paid", "📝 নোট": "📝 Note", "আছে": "Yes", "বাকি বিল": "Due bills", "বিল": "Bills", "📋 স্টকের হিসাব": "📋 Stock statement", "📥 মাল পেয়েছি:": "📥 Stock received:", "- নেই": "- none", "🔹 মোট পেয়েছি:": "🔹 Total received:", "🛒 বিক্রি হয়েছে:": "🛒 Sold:", "- 💵 নগদে:": "- 💵 Cash:", "- 📒 বাকিতে:": "- 📒 On credit:", "🔹 এ পর্যন্ত আদায়:": "🔹 Collected so far:", "- এ পর্যন্ত দিয়েছি:": "- Paid so far:", "💰 সব মিলিয়ে মোট বাকি:": "💰 Total due overall:", "👥 কাস্টমার:": "👥 Customers:", "📦 এখন আছে:": "📦 In stock now:", "প্রিয়": "Dear", "আপনার হিসাব:": "Your account:", "💵 নগদ বিক্রি (পরিশোধিত, বাকিতে ধরা হয়নি):": "💵 Cash sales (paid, not counted as due):", "💵 জমা:": "💵 Payments:", "🔴 *হিসাবে ভুল থাকলে আজই জানান।*": "🔴 *If there is any mistake in the account, tell us today.*", "🔴 *পরে কোনো সংশোধন করা হবে না।*": "🔴 *No corrections will be made later.*", "✅ আপনার কোনো বাকি নেই।": "✅ You have no dues.", "ধন্যবাদ 🙏": "Thank you 🙏", "🔸 পরের জন:": "🔸 Next:", "হিসাব দেখুন": "View statement", "সিগারেট": "সিগারেট", "❌ এই বাছাইয়ে কোনো কাস্টমারের হিসাব নেই": "❌ No customer account matches this selection", "❌ কত টাকা দিলেন লিখুন": "❌ Enter how much you paid", "❌ তারিখ বাছুন": "❌ Pick a date", "🔐 সরবরাহকারীকে টাকা": "🔐 Payment to supplier", "🔐 মাল তোলা নিশ্চিত করুন": "🔐 Confirm stock in", "🔐 রেকর্ড ডিলিট": "🔐 Delete record", "এই রেকর্ডটি মুছে যাবে": "This record will be deleted", "পেজে \"আইটেম ম্যানেজ\" খুলে নতুন আইটেমে \"স্টক রাখুন\" চালু করুন, অথবা পুরনো আইটেমের ✏️ বাটন চাপুন।": "page, open \"Manage items\" and turn on \"Keep stock\" for a new item, or press the ✏️ button of an existing item.", "মালিককে স্টক চালু করতে বলুন।": "Ask the owner to turn on stock.", "✅ বাকি খাতা v11.0 লোড হয়েছে": "✅ Baki Khata v11.0 loaded", "🔹 আপনার মোট বাকি এখন:": "🔹 Your total due now:", "এখনও": "still", "অন্য ফোনে": "on another phone", "এখন মনে করিও না ": "Do not remind now", "⏸ থামানো হয়েছে": "⏸ Paused", "দিন": "days", "সেকেন্ড": "seconds", "মিনিট": "minutes", "জনের": "customers"});

I18N_RULES.push(
    [/^⛔ অনেকবার ভুল হয়েছে। (\d+) মিনিট (\d+) সেকেন্ড পরে আবার চেষ্টা করুন।$/, '⛔ Too many wrong attempts. Try again in $1 min $2 sec.'],
    [/^❌ ভুল পাসওয়ার্ড! আর (\d+) বার চেষ্টা করা যাবে$/, '❌ Wrong password! $1 attempt(s) left'],
    [/^❌ ভুল ইউজারনেম বা পাসওয়ার্ড \(আর (\d+) বার চেষ্টা করা যাবে\)$/, '❌ Wrong username or password ($1 attempt(s) left)'],
    [/^❌ ভুল উত্তর! আর (\d+) বার চেষ্টা করা যাবে$/, '❌ Wrong answer! $1 attempt(s) left'],
    [/^⚠️ (\d+) দিন ব্যাকআপ নেননি — এখনই নিন$/, '⚠️ No backup for $1 days — take one now'],
    [/^আপনি (\d+) দিন ধরে ব্যাকআপ নেননি। ফোন হারালে বা অ্যাপ মুছলে সব হিসাব চলে যেতে পারে।$/, 'You have not taken a backup for $1 days. If you lose the phone or delete the app, all accounts could be lost.'],
    [/^👁️ (.*) — দেখার অনুমতি$/, '👁️ $1 — view permission'],
    [/^"(.*)" কে ডিলিট করবেন\?$/, 'Delete "$1"?'],
    [/^"(.*)" যোগ হয়েছে$/, '"$1" added'],
    [/^🔔 (\d+) দিন$/, '🔔 $1 days'],
    [/^(\d+) জনের$/, '$1 customer(s)'],
    [/^(\d+) জন বাছা$/, '$1 selected'],
    [/^(\d+) দিন আগে \((.*)\)$/, '$1 days ago ($2)'],
    [/^(.*) · (\d+) দিন আগে \((.*)\)(.*)$/, '$1 · $2 days ago ($3)$4'],
    [/^💬 পরের জন: (.*) →$/, '💬 Next: $1 →'],
    [/^পরের জন: (.*) — (\d+) সেকেন্ডে খুলছে…$/, 'Next: $1 — opening in $2 seconds…'],
    [/^👤 (.*) — WhatsApp খুলছে… Send চেপে ব্যাক চাপুন।$/, '👤 $1 — opening WhatsApp… press Send, then Back.'],
    [/^🎉 (\d+) জনকে পাঠানো হয়ে গেছে$/, '🎉 Sent to $1 customer(s)'],
    [/^⚠️ ফোন নম্বর নেই বা ছোট, তাই বাদ: (.*)$/, '⚠️ No phone number or too short, skipped: $1'],
    [/^✅ বাছা আছে: (.*)$/, '✅ Chosen: $1'],
    [/^📢 (.*)-এর নোটিশ$/, '📢 Notice from $1'],
    [/^(.*) থেকে (.*)$/, '$1 to $2'],
    [/^🗑️ ডিলিট হয়েছে \((\d+)টি\):$/, '🗑️ Deleted ($1 item(s)):'],
    [/^বিল: (.*) — (.*) ৳ \((.*)\) · তারিখ (.*)$/, 'Bill: $1 — $2 ৳ ($3) · date $4'],
    [/^জমা: (.*) ৳ · তারিখ (.*)$/, 'Payment: $1 ৳ · date $2'],
    [/^সরবরাহকারীকে দেওয়া টাকা: (.*) — (.*) ৳ · তারিখ (.*)$/, 'Paid to supplier: $1 — $2 ৳ · date $3'],
    [/^স্টকে মাল তোলা: (.*) (\S+) (\S+) · তারিখ (.*)$/, 'Stock received: $1 $2 $3 · date $4'],
    [/^(.*) — পুরো কাস্টমার অ্যাকাউন্ট \(বাকি ছিল (.*) ৳, (\d+)টি বিল\)$/, '$1 — whole customer account (due was $2 ৳, $3 bill(s))'],
    [/^পুরো কাস্টমার অ্যাকাউন্ট \(বাকি ছিল (.*) ৳, (\d+)টি বিল\)$/, 'Whole customer account (due was $1 ৳, $2 bill(s))'],
    [/^এন্ট্রি করেছিলেন: (.*)$/, 'Entered by: $1'],
    [/^প্রিয় (.*),$/, 'Dear $1,'],
    [/^- (\d{4}-\d\d-\d\d): জমা (.*) টাকা$/, '- $1: payment $2 Tk'],
    [/^- (\d{4}-\d\d-\d\d): (.*) = (.*) টাকা$/, '- $1: $2 = $3 Tk'],
    [/^🔹 মোট (বাকি বিল|বিল): (.*) টাকা$/, (m, w, n) => '🔹 Total ' + (w === 'বিল' ? 'bills' : 'due bills') + ': ' + n + ' Tk'],
    [/^🔹 মোট জমা: (.*) টাকা$/, '🔹 Total paid: $1 Tk'],
    [/^🔹 বাকি: (.*) টাকা।$/, '🔹 Due: $1 Tk.'],
    [/^🔹 আপনার মোট বাকি এখন: (.*) টাকা।$/, '🔹 Your total due now: $1 Tk.'],
    [/^💵 (\S+) তারিখে (.*) টাকা জমা নেওয়া হয়েছে।$/, '💵 On $1, $2 Tk payment was received.'],
    [/^💵 (\S+) তারিখে (.*) — (.*) টাকা নগদে নেওয়া হয়েছে \(বাকি নয়\)।$/, '💵 On $1, $2 — $3 Tk was paid in cash (not on credit).'],
    [/^📒? ?(\S+) তারিখে (.*) — (.*) টাকা বাকিতে দেওয়া হয়েছে।$/, '📒 On $1, $2 — $3 Tk was given on credit.'],
    [/^আপনি শেষবার (.*) নিয়েছিলেন (.*) তারিখে \((\d+) দিন আগে\)। দরকার হলে জানাবেন।$/, 'You last took $1 on $2 ($3 days ago). Let us know if you need more.'],
    [/^- নগদে নিয়েছে: (\d+) জন \((.*) টাকা\)$/, '- Took in cash: $1 customer(s) ($2 Tk)'],
    [/^- বাকিতে নিয়ে টাকা দিয়েছে: (\d+) জন$/, '- Took on credit and paid: $1 customer(s)'],
    [/^- বাকি আছে: (\d+) জন.*$/, '- Still owe: $1 customer(s)'],
    [/^💰 (.*)কে দিতে হবে:$/, '💰 To pay $1:'],
    [/^- বিক্রি (\S+) (\S+) × (\S+) = (\S+) টাকা$/, '- Sold $1 $2 × $3 = $4 Tk'],
    [/^🔹 বাকি: (\S+) টাকা$/, '🔹 Due: $1 Tk'],
    [/^· (\d{4}-\d\d-\d\d): (\S+) টাকা$/, '· $1: $2 Tk'],
    [/^(\S+) পৃষ্ঠা$/, 'Page $1'],
    [/^পৃষ্ঠা (\d+)\/(\d+)$/, 'Page $1/$2'],
    [/^(.*) \(চলমান\)$/, '$1 (continued)'],
    [/^(.*) \(হিস্টোরি\)$/, '$1 (history)'],
    [/^মোট বাকি: (.*) টাকা$/, 'Total due: $1 Tk'],
    [/^তারিখ: (.*)$/, 'Date: $1'],
    [/^ফোন: (.*)$/, 'Phone: $1'],
    [/^ঠিকানা: (.*)$/, 'Address: $1'],
    [/^পণ্য: (.*)$/, 'Items: $1'],
    [/^কত (.*) উঠলো লিখুন$/, 'Enter how many $1 were received']
);
I18N_SUBS.push([/([\d.,]+)\s*টাকা/g, '$1 Tk'], [/(\d+)\s*টি/g, '$1'], [/(\d+)\s*দিন/g, '$1 days'], [/ জন\b/g, ' customers']);
Object.assign(EN_DICT, {"কখনো না":"Never","৭ দিন পর":"After 7 days","১৫ দিন পর":"After 15 days","৩০ দিন পর":"After 30 days","🔔 চালু":"🔔 On","🔕 বন্ধ":"🔕 Off","🔕 বন্ধ রাখুন":"🔕 Turn off","🔔 চালু করুন":"🔔 Turn on","🗑️ মুছুন":"🗑️ Delete","✖ পড়েছি, বন্ধ করুন":"✖ Read, close","✖ আর মনে করিও না":"✖ Don't remind again","🔕 ৭ দিন পরে":"🔕 In 7 days","(চলমান)":"(continued)","💵 নগদ":"💵 Cash","📒 বাকি":"📒 Due","মালিক-এর নোটিশ":"Notice from Owner","— বাছুন (ফাঁকা = কার্টুন) —":"— Choose (empty = carton) —","✏️ অন্য (নিজে লিখুন)":"✏️ Other (type your own)","কোনো আইটেম নেই।":"No items.","এই সময়ে কিছু নেই।":"Nothing in this period."});
I18N_RULES.push(
    [/^(.+?) — বিল: (.*) — (\S+) ৳ \((.*)\) · তারিখ (\S+)$/, '$1 — Bill: $2 — $3 ৳ ($4) · date $5'],
    [/^(.+?) — বিল: (.*) — (\S+) ৳ \((.*)\)$/, '$1 — Bill: $2 — $3 ৳ ($4)'],
    [/^🗑️ ডিলিট হয়েছে \((\d+)টি\):$/, '🗑️ Deleted ($1):'],
    [/^🔕 (\d+) দিন পরে$/, '🔕 In $1 days'],
    [/^✅ সিঙ্ক হয়েছে (.*)$/, '✅ Synced $1'],
    [/^· বন্ধ করেছে: (.*)$/, '· Closed by: $1']
);
I18N_SUBS.push([/💵 নগদ/g, '💵 Cash'], [/📒 বাকি/g, '📒 Due']);
Object.assign(EN_DICT, {"চালু করলে একটা": "Turn this on to get a", "দোকান কোড": "shop code", "পাবেন। স্টাফের ফোনে অ্যাপ বসিয়ে সেই কোড দিলেই সব কাস্টমার ও হিসাব নেমে আসবে। দুই ফোনের এন্ট্রি নিজে থেকে মিলে যায়।": "to share. Install the app on the staff phone and enter that code to bring down all customers and accounts. Entries from both phones merge automatically."});
I18N_RULES.push(
    [/^— বিল: (.*) — (\S+) ৳ \((.*)\) · তারিখ (\S+)$/, '— Bill: $1 — $2 ৳ ($3) · date $4'],
    [/^— পুরো কাস্টমার অ্যাকাউন্ট \(বাকি ছিল (.*) ৳, (\d+)\s*টি বিল\)$/, '— whole customer account (due was $1 ৳, $2 bill(s))'],
    [/^— জমা: (.*)$/, '— Payment: $1']
);
Object.assign(EN_DICT, {"☁️ চালু করুন":"☁️ Turn on","☁️ বন্ধ করুন":"☁️ Turn off"});
const ITEM_SUG = {"চাল": "Rice", "ডাল": "Lentils", "পানি": "Water", "মিনারেল ওয়াটার": "Mineral Water", "চিনি": "Sugar", "লবণ": "Salt", "তেল": "Oil", "সয়াবিন তেল": "Soybean Oil", "সরিষার তেল": "Mustard Oil", "আটা": "Flour", "ময়দা": "Maida Flour", "সুজি": "Semolina", "মসুর ডাল": "Red Lentils", "মুগ ডাল": "Mung Dal", "ছোলা": "Chickpeas", "আলু": "Potato", "পেঁয়াজ": "Onion", "রসুন": "Garlic", "আদা": "Ginger", "মরিচ": "Chili", "হলুদ": "Turmeric", "ধনিয়া": "Coriander", "জিরা": "Cumin", "চা": "Tea", "চা পাতা": "Tea Leaves", "কফি": "Coffee", "দুধ": "Milk", "গুঁড়া দুধ": "Powdered Milk", "ডিম": "Egg", "মাছ": "Fish", "মাংস": "Meat", "মুরগি": "Chicken", "রুটি": "Bread", "পাউরুটি": "Bread", "বিস্কুট": "Biscuit", "চিপস": "Chips", "চকলেট": "Chocolate", "চানাচুর": "Chanachur", "নুডলস": "Noodles", "সাবান": "Soap", "সাবান পাউডার": "Detergent Powder", "শ্যাম্পু": "Shampoo", "টুথপেস্ট": "Toothpaste", "ব্রাশ": "Brush", "টিস্যু": "Tissue", "মোমবাতি": "Candle", "দেয়াশলাই": "Matchbox", "সিগারেট": "Cigarette", "বিড়ি": "Bidi", "পান": "Betel Leaf", "সুপারি": "Betel Nut", "জর্দা": "Jarda", "কোমল পানীয়": "Soft Drink", "কোলা": "Cola", "জুস": "Juice", "সিম কার্ড": "SIM Card", "সিম": "SIM", "মোবাইল রিচার্জ": "Mobile Recharge", "রিচার্জ": "Recharge", "ফ্লেক্সিলোড": "Flexiload", "ইন্টারনেট": "Internet", "ডাটা প্যাক": "Data Pack", "চার্জার": "Charger", "ইয়ারফোন": "Earphone", "হেডফোন": "Headphone", "ব্যাটারি": "Battery", "কলম": "Pen", "খাতা": "Notebook", "পেন্সিল": "Pencil", "কাগজ": "Paper", "আঠা": "Glue", "অন্যান্য": "Others", "বিবিধ": "Miscellaneous", "ধার": "Loan", "কেক": "Cake", "আইসক্রিম": "Ice Cream", "সবজি": "Vegetables", "ফল": "Fruit", "আপেল": "Apple", "কলা": "Banana", "আম": "Mango", "কমলা": "Orange", "গ্যাস": "Gas", "গ্যাস সিলিন্ডার": "Gas Cylinder", "কয়লা": "Coal", "জ্বালানি": "Fuel", "পেট্রোল": "Petrol", "ডিজেল": "Diesel", "ঔষধ": "Medicine", "প্যারাসিটামল": "Paracetamol", "ব্যান্ডেজ": "Bandage", "স্যালাইন": "Saline", "পানির বোতল": "Water Bottle", "বোতল": "Bottle", "গ্লাস": "Glass", "প্লেট": "Plate", "চামচ": "Spoon", "ছাতা": "Umbrella", "জুতা": "Shoes", "স্যান্ডেল": "Sandals", "মোজা": "Socks", "গেঞ্জি": "Vest", "লুঙ্গি": "Lungi", "শাড়ি": "Saree", "জামা": "Dress", "পাঞ্জাবি": "Panjabi", "টুপি": "Cap", "তালা": "Lock", "চাবি": "Key", "দড়ি": "Rope", "পলিথিন": "Polythene", "ব্যাগ": "Bag", "ঝাড়ু": "Broom", "বালতি": "Bucket", "মগ": "Mug", "সার": "Fertilizer", "বীজ": "Seeds", "কীটনাশক": "Pesticide", "সিমেন্ট": "Cement", "রড": "Rod", "ইট": "Brick", "বালু": "Sand", "রং": "Paint", "টাইলস": "Tiles"};
// আইটেমের ইংরেজি নাম: item.en — ইংরেজি মোডে নামের জায়গায় এটা দেখায়
let _itemEnKey = '', _itemEnRe = null, _itemEnMap = {};
function itemEnMap() {
    const list = (typeof appData !== 'undefined' && appData && appData.itemList) || [];
    const key = list.map(i => (i.name || '') + '\u0001' + (i.en || '')).join('\u0002');
    if (key !== _itemEnKey) {
        _itemEnKey = key; _itemEnMap = {};
        list.forEach(i => { if (i && i.name && i.en && i.en !== i.name) _itemEnMap[i.name] = i.en; });
        const names = Object.keys(_itemEnMap).sort((a, b) => b.length - a.length).map(n => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        _itemEnRe = names.length ? new RegExp('(?<![\\p{L}\\p{M}\\p{N}])(?:' + names.join('|') + ')(?![\\p{L}\\p{M}\\p{N}])', 'gu') : null;
    }
    return _itemEnRe;
}
function i18nItems(str) {
    const re = itemEnMap();
    return re ? str.replace(re, m => _itemEnMap[m] || m) : str;
}
function itemSuggest(bn) {
    bn = (bn || '').replace(/[^\p{L}\p{M}\p{N}\s]/gu, '').trim();
    if (!bn) return [];
    const out = [];
    const add = v => { if (v && !out.includes(v)) out.push(v); };
    if (ITEM_SUG[bn]) add(ITEM_SUG[bn]);
    // প্রতিটি শব্দ আলাদা করে মিলিয়ে দেখা
    const words = bn.split(/\s+/), parts = words.map(w => ITEM_SUG[w] || null);
    if (words.length > 1 && parts.every(Boolean)) add(parts.join(' '));
    Object.keys(ITEM_SUG).forEach(k => { if (out.length < 4 && k !== bn && (k.startsWith(bn) || (bn.length > 2 && bn.startsWith(k)))) add(ITEM_SUG[k]); });
    return out.slice(0, 4);
}
async function itemOnline(bn) {
    const ctl = new AbortController(); const tm = setTimeout(() => ctl.abort(), 7000);
    try {
        const r = await fetch('https://api.mymemory.translated.net/get?langpair=bn|en&q=' + encodeURIComponent(bn), { signal: ctl.signal });
        const j = await r.json();
        const t = ((j && j.responseData && j.responseData.translatedText) || '').trim();
        return t && !/[ঀ-৿]/.test(t) && !/MYMEMORY|INVALID|QUERY LENGTH/i.test(t) ? t.slice(0, 40) : '';
    } catch (e) { return ''; } finally { clearTimeout(tm); }
}
// pfx: 'newItem' বা 'editItem'

// ---------- 🖼️ আইটেমের আইকন (item.icon) ----------
const ITEM_ICONS = ['💧','🥤','🧃','🍚','🥚','🥛','🍞','🍬','🍪','🧂','🛢️','🍜','🥫','🧼','🧴','🪥','🧻','🚬','🔋','📱','☕','🍵','🧅','🥔','🌶️','🍎','🍌','🐟','🍗','🧊','🕯️','📦'];
const ITEM_ICON_KW = [
    [/পানি|water|মিনারেল|mineral/i, '💧'], [/কোলা|cola|পেপসি|pepsi|কোক|coke|drink|ড্রিংক|জুস|juice|সোডা|soda/i, '🥤'],
    [/চাল|rice|ভাত/i, '🍚'], [/ডিম|egg/i, '🥚'], [/দুধ|milk/i, '🥛'], [/রুটি|পাউরুটি|bread|বিস্কুট|biscuit|কেক|cake/i, '🍞'],
    [/চকলেট|chocolate|candy|ক্যান্ডি|মিষ্টি|lolly|চুইং|gum/i, '🍬'], [/চিপস|chips|snack|স্ন্যাক|cookie|কুকি/i, '🍪'],
    [/লবণ|salt|চিনি|sugar|মসলা|spice/i, '🧂'], [/তেল|oil|ঘি|ghee/i, '🛢️'], [/নুডল|noodle|মেগি|maggi|পাস্তা|pasta/i, '🍜'],
    [/টিন|canned|can|সস|sauce/i, '🥫'], [/সাবান|soap|সার্ফ|detergent|ওয়াশ|wash/i, '🧼'], [/শ্যাম্পু|shampoo|লোশন|lotion|ক্রিম|cream/i, '🧴'],
    [/পেস্ট|toothpaste|ব্রাশ|brush/i, '🪥'], [/টিস্যু|tissue|toilet/i, '🧻'], [/সিগারেট|cigarette|বিড়ি|tobacco/i, '🚬'],
    [/ব্যাটারি|battery|সেল/i, '🔋'], [/রিচার্জ|recharge|সিম|sim|টপআপ|topup|top-up|load/i, '📱'], [/কফি|coffee/i, '☕'], [/(?:^|[^ঀ-৿])চা(?![ঀ-৿])|tea|চায়ের/i, '🍵'],
    [/পেঁয়াজ|onion|রসুন|garlic/i, '🧅'], [/আলু|potato/i, '🥔'], [/মরিচ|chili|chilli/i, '🌶️'], [/আপেল|apple|ফল|fruit/i, '🍎'], [/কলা|banana/i, '🍌'],
    [/মাছ|fish/i, '🐟'], [/মুরগি|chicken|মাংস|meat/i, '🍗'], [/বরফ|ice/i, '🧊'], [/মোমবাতি|candle|ম্যাচ|match/i, '🕯️']
];
const ICON_SEL = { newItem: '', editItem: '' }, ICON_AUTO = { newItem: true, editItem: false };
window.addEventListener('load', () => { try { iconRender('newItem'); } catch (e) {} });
function itemIconGuess(name) { for (const [re, ic] of ITEM_ICON_KW) if (re.test(name || '')) return ic; return ''; }
function itemIconOf(it) { return (it && it.icon) || (TYPE_LABEL[it && it.type] || TYPE_LABEL.money).icon; }
function iconRender(pfx) {
    const box = document.getElementById(pfx + 'Icons'); if (!box) return;
    box.innerHTML = ITEM_ICONS.map(ic => '<span class="ic-opt' + (ICON_SEL[pfx] === ic ? ' on' : '') + '" onclick="iconPick(\'' + pfx + '\',\'' + ic + '\')">' + ic + '</span>').join('');
}
function iconPick(pfx, ic) {
    ICON_SEL[pfx] = ICON_SEL[pfx] === ic ? '' : ic; ICON_AUTO[pfx] = false;
    iconRender(pfx);
    const h = document.getElementById(pfx + 'IconHint'); if (h) h.textContent = '';
}
function iconAuto(pfx) {
    if (!ICON_AUTO[pfx]) return;
    const nm = pfx === 'newItem' ? document.getElementById('newItemInput').value : '';
    const g = itemIconGuess(nm);
    ICON_SEL[pfx] = g; iconRender(pfx);
    const h = document.getElementById(pfx + 'IconHint'); if (h) h.textContent = g ? '✨ ' + (LANG === 'en' ? 'Icon picked from the name: ' : 'নাম দেখে আইকন বাছা হয়েছে: ') + g : '';
}
function itemSugShow(pfx) {
    if (pfx === 'newItem') iconAuto('newItem');
    const nm = pfx === 'newItem' ? document.getElementById('newItemInput').value : ((appData.itemList[editingItemIdx] || {}).name || '');
    const box = document.getElementById(pfx + 'Sug'), en = document.getElementById(pfx + 'En');
    if (!box) return;
    const list = itemSuggest(nm);
    box.innerHTML = list.map(v => '<span class="en-chip" onclick="itemSugPick(\'' + pfx + '\',this.textContent)">' + escapeHtml(v) + '</span>').join('') || '<span class="en-hint">ফোনের তালিকায় নেই — 🌐 চাপলে অনলাইনে খুঁজবে</span>';
    if (list.length && en && !en.value.trim() && pfx === 'newItem') en.value = list[0];
}
function itemSugPick(pfx, v) { document.getElementById(pfx + 'En').value = v; }
async function itemSugOnline(pfx) {
    const nm = pfx === 'newItem' ? document.getElementById('newItemInput').value.trim() : ((appData.itemList[editingItemIdx] || {}).name || '');
    if (!nm) return alert('আগে আইটেমের নাম লিখুন');
    const btn = document.getElementById(pfx + 'EnBtn'); const old = btn.textContent; btn.textContent = '⏳'; btn.disabled = true;
    const t = await itemOnline(nm.replace(/[^\p{L}\p{M}\p{N}\s]/gu, ''));
    btn.textContent = old; btn.disabled = false;
    if (!t) return alert('অনলাইনে অনুবাদ পাওয়া যায়নি (ইন্টারনেট দেখুন) — নিজে লিখে নিন।');
    document.getElementById(pfx + 'En').value = t;
    const box = document.getElementById(pfx + 'Sug'); if (box) box.innerHTML = '<span class="en-chip" onclick="itemSugPick(\'' + pfx + '\',this.textContent)">' + escapeHtml(t) + '</span>';
}
// ---------- 📄 PDF ও মেসেজের ভাষা: ডিফল্ট = অ্যাপের ভাষা অনুযায়ী ('auto'); সেটিংসে "সবসময় বাংলা/English"ও বাছা যায় ----------
let SEARCH_PIN = null;
let DOC_OVERRIDE = null;   // শুধু একটা মেসেজের জন্য ভাষা বদলাতে (পপআপের বোতাম); কাজ শেষে সবসময় null করা হয়
function docLangNow() {
    if (DOC_OVERRIDE !== null) return DOC_OVERRIDE;
    const m = (typeof appData !== 'undefined' && appData && appData.docLang) || 'auto';
    return m === 'en' || m === 'bn' ? m : (LANG === 'en' ? 'en' : 'bn');
}
const docEn = () => docLangNow() === 'en';
function docTr(str) {
    if (!docEn() || !str || !/[ঀ-৿]/.test(str)) return str;
    const o = LANG; LANG = 'en';
    try { return String(str).split('\n').map(l => i18nTr(l)).join('\n'); } finally { LANG = o; }
}
// fn চলার সময় তারিখ ইত্যাদি ডকুমেন্টের ভাষায় আসে (অ্যাপের ভাষা যা-ই হোক); ইংরেজি হলে লেখাও অনুবাদ হয়
function docCtx(fn) {
    const want = docLangNow(), o = LANG; LANG = want;
    try { return fn(); } finally { LANG = o; }
}
function docGen(fn) {
    const want = docLangNow(), o = LANG; LANG = want;
    try { const r = String(fn()); return want === 'en' ? r.split('\n').map(l => i18nTr(l)).join('\n') : r; } finally { LANG = o; }
}
function docLangRowText() {
    const m = (appData && appData.docLang) || 'auto';
    return m === 'en' ? 'এখন: সবসময় English (চাপলে → অ্যাপের ভাষা অনুযায়ী) — শুধু মালিক'
        : m === 'bn' ? 'এখন: সবসময় বাংলা (চাপলে → সবসময় English) — শুধু মালিক'
        : 'এখন: অ্যাপের ভাষা অনুযায়ী (চাপলে → সবসময় বাংলা) — শুধু মালিক';
}
function refreshDocLangRow() { const el = document.getElementById('docLangSub'); if (el) el.textContent = docLangRowText(); }
function toggleDocLang() {
    if (!isOwner()) return alert('🔒 এই কাজটি শুধু মালিক করতে পারবেন।');
    const m = appData.docLang || 'auto';
    appData.docLang = m === 'auto' ? 'bn' : m === 'bn' ? 'en' : 'auto';
    save(); refreshDocLangRow();
    alert(appData.docLang === 'bn' ? '✅ PDF ও WhatsApp মেসেজ সবসময় বাংলায় হবে' : appData.docLang === 'en' ? '✅ PDF ও WhatsApp মেসেজ সবসময় ইংরেজিতে হবে' : '✅ PDF ও WhatsApp মেসেজ অ্যাপের ভাষা অনুযায়ী হবে');
}
Object.assign(EN_DICT, {"📄 PDF ও মেসেজের ভাষা": "📄 PDF & message language", "PDF ও মেসেজের ভাষা": "PDF & message language", "এখন: বাংলা — চাপলে English হবে (শুধু মালিক)": "Now: Bengali — tap to switch to English (owner only)", "এখন: English — চাপলে বাংলা হবে (শুধু মালিক)": "Now: English — tap to switch to Bengali (owner only)", "✅ এখন থেকে PDF ও WhatsApp মেসেজ ইংরেজিতে তৈরি হবে": "✅ From now on, PDFs and WhatsApp messages are created in English", "✅ এখন থেকে PDF ও WhatsApp মেসেজ বাংলায় তৈরি হবে": "✅ From now on, PDFs and WhatsApp messages are created in Bengali", "আপনার হিসাব:": "Your account:", "📋 বাকি বিল:": "📋 Due bills:", "📋 বিল:": "📋 Bills:", "- নেই": "- None", "💵 নগদ বিক্রি (পরিশোধিত, বাকিতে ধরা হয়নি):": "💵 Cash sales (paid, not counted as due):", "💵 জমা:": "💵 Payments:", "✅ আপনার কোনো বাকি নেই।": "✅ You have no dues.", "🔴 *হিসাবে ভুল থাকলে আজই জানান।*": "🔴 *Please tell us today if there is any mistake.*", "🔴 *পরে কোনো সংশোধন করা হবে না।*": "🔴 *No corrections will be made later.*", "📋 স্টকের হিসাব": "📋 Stock report", "📥 মাল পেয়েছি:": "📥 Stock received:", "🛒 বিক্রি হয়েছে:": "🛒 Sold:", "- 💵 নগদে:": "- 💵 Cash:", "- 📒 বাকিতে:": "- 📒 On credit:", "👥 কাস্টমার:": "👥 Customers:", "ধন্যবাদ": "Thank you", "তারিখ:": "Date:", "তারিখ": "Date", "বিবরণ": "Details", "ধরন": "Type", "বাকি": "Due", "নগদ": "Cash", "টাকা": "Amount"});
I18N_RULES.push(
    [/^প্রিয় (.*),$/, 'Dear $1,'],
    [/^- (\S+): (.*) = (\S+) টাকা$/, '- $1: $2 = $3 Tk'],
    [/^- (\S+): জমা (\S+) টাকা$/, '- $1: payment $2 Tk'],
    [/^🔹 মোট (বাকি বিল|বিল): (\S+) টাকা$/, (m, w, n) => '🔹 Total ' + (w === 'বিল' ? 'bills' : 'due bills') + ': ' + n + ' Tk'],
    [/^🔹 মোট জমা: (\S+) টাকা$/, '🔹 Total paid: $1 Tk'],
    [/^🔹 বাকি: (\S+) টাকা।$/, '🔹 Due: $1 Tk.'],
    [/^💵 (\S+) তারিখে (\S+) টাকা জমা নেওয়া হয়েছে।$/, '💵 On $1, $2 Tk payment was received.'],
    [/^💵 (\S+) তারিখে (.*) — (\S+) টাকা নগদে নেওয়া হয়েছে \(বাকি নয়\)।$/, '💵 On $1, $2 — $3 Tk taken in cash (not on credit).'],
    [/^📋 (\S+) তারিখে (.*) — (\S+) টাকা বাকিতে দেওয়া হয়েছে।$/, '📋 On $1, $2 — $3 Tk given on credit.'],
    [/^🔹 আপনার মোট বাকি এখন: (\S+) টাকা।$/, '🔹 Your total due now: $1 Tk.'],
    [/^আপনি শেষবার (.*) নিয়েছিলেন (\S+) তারিখে \((\d+) দিন আগে\)। .*$/, 'You last took $1 on $2 ($3 days ago). Let us know if you need more. Thank you 🙏'],
    [/^🔹 মোট পেয়েছি: (.*)$/, '🔹 Total received: $1'],
    [/^📦 এখন আছে: (.*)$/, '📦 In stock now: $1'],
    [/^🛒 বিক্রি হয়েছে: (.*)$/, '🛒 Sold: $1'],
    [/^- নগদে নিয়েছে: (\d+) জন \((.*) টাকা\)$/, '- Took in cash: $1 customer(s) ($2 Tk)'],
    [/^- বাকিতে নিয়ে টাকা দিয়েছে: (\d+) জন$/, '- Took on credit and paid: $1 customer(s)'],
    [/^- বাকি আছে: (\d+) জন \((.*) টাকা\)$/, '- Still owe: $1 customer(s) ($2 Tk)'],
    [/^🔹 এ পর্যন্ত আদায়: (.*) টাকা$/, '🔹 Collected so far: $1 Tk'],
    [/^(.*)কে দিতে হবে:$/, 'To pay $1:'],
    [/^- বিক্রি (\S+) × (\S+) = (\S+) টাকা$/, '- Sold $1 × $2 = $3 Tk'],
    [/^- এ পর্যন্ত দিয়েছি: (.*) টাকা$/, '- Paid so far: $1 Tk'],
    [/^- 💵 নগদে: (.*)$/, '- 💵 Cash: $1'],
    [/^- 📒 বাকিতে: (.*)$/, '- 📒 On credit: $1'],
    [/^📅 (.*)$/, '📅 $1'],
    [/^💰 সব মিলিয়ে মোট বাকি: (\S+) টাকা$/, '💰 Total due overall: $1 Tk'],
    [/^ফোন: (.*)$/, 'Phone: $1'],
    [/^ঠিকানা: (.*)$/, 'Address: $1'],
    [/^মোট বাকি: (\S+) টাকা$/, 'Total due: $1 Tk'],
    [/^পৃষ্ঠা (\d+)\/(\d+)$/, 'Page $1/$2'],
    [/^তারিখ: (.*)$/, 'Date: $1'],
    [/^পণ্য: (.*)$/, 'Item: $1'],
    [/^(\S+) টাকা$/, '$1 Tk']
);
Object.assign(EN_DICT, {"কার্টুন":"carton","কেস":"case","পিস":"pc","প্যাকেট":"packet","ডজন":"dozen","বস্তা":"sack","কেজি":"kg","গ্রাম":"gram","লিটার":"liter","বোতল":"bottle","বান্ডিল":"bundle","জোড়া":"pair","মিটার":"meter"});
Object.assign(EN_DICT, {"এখন: সবসময় English (চাপলে → অ্যাপের ভাষা অনুযায়ী) — শুধু মালিক": "Now: always English (tap → follow app language) — owner only", "এখন: সবসময় বাংলা (চাপলে → সবসময় English) — শুধু মালিক": "Now: always Bengali (tap → always English) — owner only", "এখন: অ্যাপের ভাষা অনুযায়ী (চাপলে → সবসময় বাংলা) — শুধু মালিক": "Now: follows app language (tap → always Bengali) — owner only", "✅ PDF ও WhatsApp মেসেজ সবসময় বাংলায় হবে": "✅ PDFs and WhatsApp messages will always be in Bengali", "✅ PDF ও WhatsApp মেসেজ সবসময় ইংরেজিতে হবে": "✅ PDFs and WhatsApp messages will always be in English", "✅ PDF ও WhatsApp মেসেজ অ্যাপের ভাষা অনুযায়ী হবে": "✅ PDFs and WhatsApp messages will follow the app language"});
function i18nTr(str) {
    if (LANG !== 'en' || !str) return str;
    return i18nItems(i18nTrCore(str));
}
function i18nTrCore(str) {
    if (LANG !== 'en' || !str) return str;
    const full = str.replace(/\s+/g, ' ').trim();
    if (!/[ঀ-৿]/.test(full)) return str;
    const lead = str.match(/^\s*/)[0], trail = str.match(/\s*$/)[0];
    if (EN_DICT[full] !== undefined) return lead + EN_DICT[full] + trail;
    const post = o => { if (/[ঀ-৿]/.test(o)) for (const r of I18N_SUBS) o = o.replace(r[0], r[1]); return o; };
    for (const r of I18N_RULES) { if (r[0].test(full)) return lead + post(full.replace(r[0], r[1])) + trail; }
    const m = /^([^\p{L}\p{M}\p{N}]*)([\s\S]*?)([^\p{L}\p{M}\p{N}]*)$/u.exec(full);
    if (m && m[2] && EN_DICT[m[2]] !== undefined) return lead + m[1] + EN_DICT[m[2]] + m[3] + trail;
    let out = full;
    for (const r of I18N_SUBS) out = out.replace(r[0], r[1]);
    return out !== full ? lead + out + trail : str;
}
// alert/confirm বার্তাও ইংরেজিতে (লাইন ধরে ধরে)
(function () {
    const trMsg = m => (LANG === 'en' ? String(m).split('\n').map(l => i18nTr(l)).join('\n') : m);
    const _alert = window.alert.bind(window), _confirm = window.confirm.bind(window);
    window.alert = m => _alert(trMsg(m));
    window.confirm = m => _confirm(trMsg(m));
})();
let i18nBusy = false, i18nObs = null;
const I18N_ATTRS = ['placeholder', 'title', 'aria-label'];
function i18nNode(root) {
    if (!root) return;
    if (root.nodeType === 3) {
        if (root.__bn === undefined && /[ঀ-৿]/.test(root.nodeValue) && !(root.parentNode && root.parentNode.closest && root.parentNode.closest('[data-nt]'))) {
            const t = i18nTr(root.nodeValue);
            if (t !== root.nodeValue) { root.__bn = root.nodeValue; root.nodeValue = t; }
        }
        return;
    }
    if (root.nodeType !== 1) return;
    if (root.closest && root.closest('[data-nt]')) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n = root;
    const els = [];
    while (n) {
        if (n.nodeType === 3) {
            if (n.__bn === undefined && /[ঀ-৿]/.test(n.nodeValue) && !(n.parentNode && n.parentNode.closest && n.parentNode.closest('[data-nt]'))) {
                const t = i18nTr(n.nodeValue);
                if (t !== n.nodeValue) { n.__bn = n.nodeValue; n.nodeValue = t; }
            }
        } else if (n.nodeType === 1) els.push(n);
        n = w.nextNode();
    }
    els.forEach(e => I18N_ATTRS.forEach(a => {
        const k = 'data-bn-' + a, v = e.getAttribute(a);
        if (v && !e.hasAttribute(k) && /[ঀ-৿]/.test(v)) { const t = i18nTr(v); if (t !== v) { e.setAttribute(k, v); e.setAttribute(a, t); } }
    }));
}
function i18nRestore(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let n = w.currentNode;
    while (n) {
        if (n.nodeType === 3 && n.__bn !== undefined) { n.nodeValue = n.__bn; delete n.__bn; }
        else if (n.nodeType === 1) I18N_ATTRS.forEach(a => { const k = 'data-bn-' + a; if (n.hasAttribute(k)) { n.setAttribute(a, n.getAttribute(k)); n.removeAttribute(k); } });
        n = w.nextNode();
    }
}
function i18nStart() {
    if (!i18nObs) {
        i18nObs = new MutationObserver(list => {
            if (i18nBusy || LANG !== 'en') return;
            i18nBusy = true;
            try {
                list.forEach(r => {
                    if (r.type === 'childList') r.addedNodes.forEach(nd => i18nNode(nd));
                    else if (r.type === 'characterData') { delete r.target.__bn; i18nNode(r.target); }
                    else if (r.type === 'attributes') { const k = 'data-bn-' + r.attributeName; if (!r.target.hasAttribute(k)) i18nNode(r.target); }
                });
            } catch (e) {}
            i18nObs.takeRecords();
            i18nBusy = false;
        });
    }
    i18nObs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: I18N_ATTRS });
}
// প্রতিটি পেজের উপরের বক্সে ভাষা-বোতাম
function ensureHeroPills() {
    document.querySelectorAll('.page-hero').forEach(h => {
        if (h.querySelector('.lg-pill')) return;
        const p = document.createElement('span');
        p.className = 'lg-pill lg-hero'; p.setAttribute('data-nt', ''); p.title = 'Language';
        p.setAttribute('onclick', 'toggleLang(event)');
        p.textContent = langPillText();
        h.appendChild(p);
    });
}
function applyLang() {
    ensureHeroPills();
    i18nBusy = true;
    try {
        document.documentElement.lang = LANG === 'en' ? 'en' : 'bn';
        if (LANG === 'en') { i18nNode(document.body); i18nStart(); }
        else { if (i18nObs) i18nObs.disconnect(); i18nRestore(document.body); }
    } catch (e) {}
    if (i18nObs) i18nObs.takeRecords();
    i18nBusy = false;
    document.querySelectorAll('.lg-pill').forEach(p => { p.textContent = langPillText(); });
    try { updateClock(); } catch (e) {}
}
// বোতামে সবসময় সেই ভাষা লেখা থাকে যেখানে চাপলে যাওয়া হবে
const langPillText = () => (LANG === 'en' ? '🌐 বাং' : '🌐 EN');
function toggleLang(ev) {
    if (ev) ev.stopPropagation();
    LANG = LANG === 'en' ? 'bn' : 'en';
    try { localStorage.setItem('bkLang', LANG); } catch (e) {}
    // ভাষা বদলালে ডেটা-ভিত্তিক অংশ (তারিখ ইত্যাদি) নতুন করে আঁকা হয়
    const tryDo = f => { try { f(); } catch (e) {} };
    if (typeof currentUser !== 'undefined' && currentUser) {
        if (currentUser.viewer) tryDo(renderViewer);
        else {
            tryDo(() => show());
            if (currentPage === 'reports') tryDo(renderReports);
            if (currentPage === 'stock') tryDo(renderStock);
            tryDo(() => { const m = document.getElementById('employeesListModal'); if (m && getComputedStyle(m).display !== 'none') renderEmployeesList(); });
        }
    }
    tryDo(() => renderSavedUsers());
    tryDo(fpUpdateLogin);
    applyLang();
}


/* ==========================================================================
   বাকি খাতা — script.js
   সূচি:
     1. ধ্রুবক, হিসাবের কোর (Calc), ডেটা ও স্টেট
     2. সাধারণ সহায়ক ফাংশন
     3. সেটআপ ও লগইন
     4. অ্যাকাউন্ট: ইউজার মেনু, প্রোফাইল, পাসওয়ার্ড, রিকভারি
     5. স্টাফ
     6. পেজ নেভিগেশন, মডাল, পাসওয়ার্ড ধাপ
     7. মূল অ্যাপ: ঘড়ি, দোকান, তারিখ ফিল্টার
     8. আইটেম ম্যানেজার
     9. কাস্টমার কার্ড: রেন্ডার, বিক্রি, জমা, নোট, ছবি, হিস্টোরি
    10. সার্চ, রিপোর্ট, সেটিংস, ব্যাকআপ, প্রিন্ট
    11. স্টক
    12. ডিলিট লগ
    13. কিবোর্ড ফিক্স
    14. চালু করা (boot)
   ========================================================================== */

// ================== 1. ধ্রুবক, হিসাবের কোর, ডেটা ও স্টেট ==================
const STOCK_ITEM = 'মিনারেল ওয়াটার';   // পুরনো ডেটায় শুধু এই আইটেমের স্টক ছিল

// হিসাব এক জায়গায়। নগদ বিক্রি "বিল"-এ ধরা হয় না (তাই বাকি বাড়ে না)।
// স্টক = মোট তোলা − (সব কাস্টমারের চলতি ও হিস্টোরির বিক্রি)। আলাদা সংখ্যা রাখা হয় না,
// তাই বিক্রি ডিলিট/এডিট করলে স্টক নিজে ঠিক হয়ে যায়।
const Calc = {
    num(v) { const n = parseFloat(v); return isNaN(n) ? 0 : n; },
    r2(n) { return Math.round((Number(n) || 0) * 100 + (n < 0 ? -1e-9 : 1e-9)) / 100; },
    isCash(t) { return !!t && t.pay === 'cash'; },

    totals(cus) {
        let bill = 0, paid = 0, cash = 0;
        (cus.tx || []).forEach(t => { if (Calc.isCash(t)) cash += Calc.num(t.amt); else bill += Calc.num(t.amt); });
        (cus.payment || []).forEach(p => { paid += Calc.num(p.amt); });
        bill = Calc.r2(bill); paid = Calc.r2(paid); cash = Calc.r2(cash);
        return { bill, paid, due: Calc.r2(bill - paid), cash };
    },

    // নির্দিষ্ট সময়ে নগদ বিক্রি, বাকিতে বিক্রি, বাকি আদায় (জমা) — পুরনো (হিস্টোরির) হিসাবসহ
    salesReport(data, from, to) {
        const inR = d => !!d && (!from || d >= from) && (!to || d <= to);
        const out = { cash: 0, baki: 0, collected: 0, items: {} };
        const addTx = t => {
            if (!t || !inR(t.dt)) return;
            const a = Calc.num(t.amt), it = out.items[t.tp] || (out.items[t.tp] = { cash: 0, baki: 0 });
            if (Calc.isCash(t)) { out.cash += a; it.cash += a; } else { out.baki += a; it.baki += a; }
        };
        const addPay = p => { if (p && inR(p.dt)) out.collected += Calc.num(p.amt); };
        (data.customers || []).forEach(c => {
            (c.tx || []).forEach(addTx); (c.payment || []).forEach(addPay);
            (c.history || []).forEach(h => { (h.tx || []).forEach(addTx); (h.payment || []).forEach(addPay); });
        });
        out.cash = Calc.r2(out.cash); out.baki = Calc.r2(out.baki); out.collected = Calc.r2(out.collected);
        Object.keys(out.items).forEach(k => { out.items[k].cash = Calc.r2(out.items[k].cash); out.items[k].baki = Calc.r2(out.items[k].baki); });
        return out;
    },

    stockInfo(data, name) {
        name = name || STOCK_ITEM;
        const entries = (data.stock && data.stock.entries) || [];
        let received = 0, soldCash = 0, soldBaki = 0;
        entries.forEach(e => { if ((e.item || STOCK_ITEM) === name) received += Calc.num(e.qty); });
        const add = t => {
            if (!t || t.tp !== name) return;
            if (Calc.isCash(t)) soldCash += Calc.num(t.qty); else soldBaki += Calc.num(t.qty);
        };
        (data.customers || []).forEach(c => {
            (c.tx || []).forEach(add);
            (c.history || []).forEach(h => (h.tx || []).forEach(add));
        });
        const sold = soldCash + soldBaki;
        return { received, sold, soldCash, soldBaki, remaining: received - sold };
    },

    // out = শেষ, low = সীমার নিচে, ok
    stockLevel(item, s) {
        const low = Calc.num(item && item.low);
        if (s.remaining <= 0) return 'out';
        if (low > 0 && s.remaining <= low) return 'low';
        return 'ok';
    },

    stockItems(data) { return (data.itemList || []).filter(i => i && i.stock); },

    // কোন কাস্টমার কোন আইটেম শেষ কবে নিয়েছে; নির্দিষ্ট দিন পার হলে তালিকায় আসে (নগদ/বাকি দুটোই ধরা হয়)
    dayNum(s) { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(s || ''); return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) / 86400000 : NaN; },
    dueReminders(data, today) {
        const t0 = Calc.dayNum(today), out = [];
        (data.itemList || []).forEach((it, itemIdx) => {
            const gap = Calc.num(it && it.remind);
            if (!it || gap <= 0) return;
            (data.customers || []).forEach((c, idx) => {
                let last = null, amt = '';
                const see = t => { if (t && t.tp === it.name && (!last || t.dt > last)) { last = t.dt; amt = t.amt; } };
                (c.tx || []).forEach(see);
                (c.history || []).forEach(h => (h.tx || []).forEach(see));
                if (!last) return;
                const sz = c.snooze && c.snooze[it.name];   // "এখন মনে করিও না": নির্দিষ্ট দিন পর্যন্ত, বা পরের কেনা পর্যন্ত
                if (sz && ((sz.until && today < sz.until) || (!sz.until && sz.last === last))) return;
                const days = t0 - Calc.dayNum(last);
                if (days >= gap) out.push({ idx, itemIdx, name: c.name, phone: c.phone, item: it.name, last, days, amt, gap });
            });
        });
        return out.sort((a, b) => b.days - a.days);
    }
};

// ---------- পাসওয়ার্ড হ্যাশ (সাধারণ লেখা আর সেভ হয় না) ----------
// SHA-256 (ফাইল থেকে খোলা অ্যাপেও চলে বলে নিজস্ব সংস্করণ) + এলোমেলো salt + বহুবার ঘোরানো
function sha256(msg) {
    if (!sha256.K) {
        const primes = []; for (let n = 2; primes.length < 64; n++) if (primes.every(p => n % p)) primes.push(n);
        const frac = x => Math.floor((x - Math.floor(x)) * 4294967296);
        sha256.K = primes.map(p => frac(Math.cbrt(p)));
        sha256.H0 = primes.slice(0, 8).map(p => frac(Math.sqrt(p)));
    }
    const K = sha256.K, H = sha256.H0.slice();
    const bytes = Array.from(new TextEncoder().encode(msg));
    const bitLen = bytes.length * 8;
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) bytes.push(0);
    for (let i = 7; i >= 0; i--) bytes.push(i >= 4 ? 0 : (bitLen >>> (i * 8)) & 0xff);
    const rotr = (x, n) => (x >>> n) | (x << (32 - n));
    const w = new Array(64);
    for (let off = 0; off < bytes.length; off += 64) {
        for (let i = 0; i < 16; i++) w[i] = (bytes[off + 4 * i] << 24) | (bytes[off + 4 * i + 1] << 16) | (bytes[off + 4 * i + 2] << 8) | bytes[off + 4 * i + 3];
        for (let i = 16; i < 64; i++) {
            const s0 = rotr(w[i - 15], 7) ^ rotr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
            const s1 = rotr(w[i - 2], 17) ^ rotr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
            w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
        }
        let [a, b, c, d, e, f, g, h] = H;
        for (let i = 0; i < 64; i++) {
            const t1 = (h + (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) | 0;
            const t2 = ((rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
            h = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
        }
        H[0] = (H[0] + a) | 0; H[1] = (H[1] + b) | 0; H[2] = (H[2] + c) | 0; H[3] = (H[3] + d) | 0;
        H[4] = (H[4] + e) | 0; H[5] = (H[5] + f) | 0; H[6] = (H[6] + g) | 0; H[7] = (H[7] + h) | 0;
    }
    return H.map(x => (x >>> 0).toString(16).padStart(8, '0')).join('');
}
function randomSalt() {
    const a = new Uint8Array(12);
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(a); else for (let i = 0; i < a.length; i++) a[i] = Math.floor(Math.random() * 256);
    return Array.from(a).map(x => x.toString(16).padStart(2, '0')).join('');
}
function hashSecret(plain, salt) {
    salt = salt || randomSalt();
    let h = sha256(salt + '|' + plain);
    for (let i = 0; i < 3000; i++) h = sha256(h + salt);
    return 's1$' + salt + '$' + h;
}
function verifySecret(plain, stored) {
    const p = String(stored || '').split('$');
    if (p.length !== 3 || p[0] !== 's1') return false;
    return hashSecret(plain, p[1]) === stored;
}
function setAccountPassword(acc, plain) { acc.passHash = hashSecret(plain); delete acc.password; }
function makeRecovery(question, answer) {
    return { question: question, ansH2: hashSecret(answer.toLowerCase().trim()), hint: getHintFromAnswer(answer), setAt: now() };
}
// পুরনো (দুর্বল) উত্তর-হ্যাশ মিললে সাথে সাথে নতুন হ্যাশে বদলে দেয়
function checkAnswer(rec, ans) {
    const a = (ans || '').toLowerCase().trim();
    if (rec.ansH2) return verifySecret(a, rec.ansH2);
    if (rec.answerHash && simpleHash(ans) === rec.answerHash) { rec.ansH2 = hashSecret(a); delete rec.answerHash; save(); return true; }
    return false;
}
// পুরনো ডেটার সাধারণ-লেখা পাসওয়ার্ড/পিন একবার হ্যাশে বদলানো (লোড ও রিস্টোরে)
function migrateSecrets(d) {
    const conv = a => { if (a && a.password !== undefined) { a.passHash = hashSecret(String(a.password)); delete a.password; } };
    conv(d.owner); d.employees.forEach(conv);
    if (d.txPin) d.txPinHash = hashSecret(String(d.txPin));
    delete d.txPin;
}

// ---------- ভুল চেষ্টায় আটকানো (ফোন বন্ধ করে খুললেও থাকে) ----------
const LOCK_RULES = { login: [5, 2], pin: [5, 2], recovery: [3, 10] };   // [কত বার ভুল, কত মিনিট আটকে থাকবে]
function lockLeftSec(key) {
    try { const o = JSON.parse(localStorage.getItem('bkLock_' + key)); if (o && o.until > Date.now()) return Math.ceil((o.until - Date.now()) / 1000); } catch (e) {}
    return 0;
}
function lockFail(key) {   // ফেরত: আর কত বার চেষ্টা করা যাবে (০ = এখন আটকে গেল)
    const [max, mins] = LOCK_RULES[key];
    let o = {}; try { o = JSON.parse(localStorage.getItem('bkLock_' + key)) || {}; } catch (e) {}
    if (o.until && o.until <= Date.now()) o = {};
    o.n = (o.n || 0) + 1;
    let left = max - o.n;
    if (left <= 0) { o = { n: 0, until: Date.now() + mins * 60000 }; left = 0; }
    try { localStorage.setItem('bkLock_' + key, JSON.stringify(o)); } catch (e) {}
    return left;
}
function lockClear(key) { try { localStorage.removeItem('bkLock_' + key); } catch (e) {} }
function lockMsg(sec) { return '⛔ অনেকবার ভুল হয়েছে। ' + Math.floor(sec / 60) + ' মিনিট ' + (sec % 60) + ' সেকেন্ড পরে আবার চেষ্টা করুন।'; }
// ঠিক হলে null, ভুল বা আটকে থাকলে দেখানোর বার্তা
function guardedVerify(key, isOk) {
    const left = lockLeftSec(key);
    if (left) return lockMsg(left);
    if (isOk()) { lockClear(key); return null; }
    const n = lockFail(key);
    return n > 0 ? '❌ ভুল পাসওয়ার্ড! আর ' + n + ' বার চেষ্টা করা যাবে' : lockMsg(lockLeftSec(key));
}

function defaultItems() {
    return [
        { name: "সিম কার্ড", type: "money" },
        { name: "মোবাইল রিচার্জ", type: "money" },
        { name: STOCK_ITEM, type: "carton", stock: true, unit: "কার্টুন", rate: 11 }
    ];
}

// লোড ও রিস্টোর — দুই জায়গাতেই একই নিয়মে ডেটা ঠিক করা হয়
function normalizeData(d) {
    if (!Array.isArray(d.itemList) || d.itemList.length === 0) d.itemList = defaultItems();
    if (!Array.isArray(d.employees)) d.employees = [];
    if (!Array.isArray(d.customers)) d.customers = [];
    if (!d.shop) d.shop = { name: '', phone: '', address: '' };
    if (typeof d.waNotify === 'undefined') d.waNotify = true;
    // PDF/মেসেজের ভাষা: একবার 'অ্যাপের ভাষা অনুযায়ী'-তে রিসেট; এরপর সেটিংসের পছন্দ মানা হয়
    if (d.docLangV !== 3) { d.docLang = 'auto'; d.docLangV = 3; }
    if (typeof d.logKeepDays === 'undefined') d.logKeepDays = 0;
    migrateSecrets(d);
    if (typeof d.txPinHash === 'undefined') d.txPinHash = null;
    if (d.owner && typeof d.owner.photo === 'undefined') d.owner.photo = null;
    d.employees.forEach(emp => { if (typeof emp.photo === 'undefined') emp.photo = null; });
    d.customers.forEach(c => {
        if (!Array.isArray(c.tx)) c.tx = [];
        if (!Array.isArray(c.payment)) c.payment = [];
        if (!Array.isArray(c.history)) c.history = [];
        if (typeof c.photo === 'undefined') c.photo = null;
        if (typeof c.note === 'undefined') c.note = '';
    });
    // স্টক ও ডিলিট লগ
    if (!d.stock || !Array.isArray(d.stock.entries)) d.stock = { entries: [] };
    d.stock.entries.forEach(e => { if (!e.item) e.item = STOCK_ITEM; });
    if (!Array.isArray(d.deleteLog)) d.deleteLog = [];
    if (!Array.isArray(d.notices)) d.notices = [];
    // পুরনো ডেটা: আগে শুধু পানির স্টক ছিল, পানিকে প্রথম স্টক-আইটেম বানানো হয়
    d.itemList.forEach(it => {
        if (it.name === STOCK_ITEM && it.stock === undefined) {
            it.stock = true;
            if (!it.unit) it.unit = 'কার্টুন';
            if (it.rate === undefined) it.rate = 11;
        }
    });
    return d;
}

let appData = normalizeData(JSON.parse(localStorage.getItem('bakiKhata')) || {
    setupDone: false,
    shop: { name: '', phone: '', address: '' },
    owner: null,
    employees: [],
    customers: [],
    txPinHash: null,
    itemList: defaultItems()
});

function save() {
    try {
        localStorage.setItem('bakiKhata', JSON.stringify(appData));
        if (typeof scheduleSync === 'function') scheduleSync();
    } catch (e) {
        // ফোনের স্টোরেজ ভর্তি হলে আগে নীরবে ব্যর্থ হতো
        alert('⚠️ ফোনের স্টোরেজ ভর্তি, ডেটা সেভ হয়নি!\n\nছবি ডিলিট করুন বা ব্যাকআপ নিয়ে রাখুন।');
    }
}

// পুরনো সাধারণ-লেখা পাসওয়ার্ড বদলে গেলে সাথে সাথে স্টোরেজেও হ্যাশ সেভ করে
try { if (/"password"|"txPin"/.test(localStorage.getItem('bakiKhata') || '')) save(); } catch (e) {}

let currentUser = null;
let recoveryTargetUser = null;
let pendingAction = null;
let dateFilter = { type: 'all', value: null };
let currentNoteCusIdx = null;
let currentPage = 'home';
let currentHistoryFilter = 'all';
let selectedType = 'carton';
let currentEditCusIdx = null;
let currentEditTxIdx = null;
let currentPayCusIdx = null;
let currentPhotoCusIdx = null;
let deleteCallback = null;
let pendingTxAction = null;
let clockTimer = null;        // ঘড়ির টাইমার (একবারই চালু হয়)
let editingItemIdx = null;   // আইটেমের স্টক-সেটিংস কোনটার

const TYPE_LABEL = {
    carton: { text: "সংখ্যা × দাম", icon: "🧮", cls: "type-carton" },
    free:   { text: "ফ্রি",    icon: "⚖️", cls: "type-free" },
    money:  { text: "টাকা",   icon: "💵", cls: "type-money" }
};

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
function now() { return new Date().toISOString(); }
function isOwner() { return currentUser && currentUser.role === 'owner'; }
function isEmployee() { return currentUser && currentUser.role === 'employee'; }
function isViewer() { return !!(currentUser && currentUser.viewer); }

// ================== 2. সাধারণ সহায়ক ফাংশন ==================
const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function escapeHtml(text) {
    return String(text == null ? '' : text).replace(/[&<>"']/g, c => ESC_MAP[c]);
}
// আজকের তারিখ (ফোনের লোকাল সময়ে; UTC ধরলে ভোরে আগের দিন আসত)
function ymd(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function todayLocal() { return ymd(new Date()); }

function simpleHash(str) {
    let s = (str || '').toLowerCase().trim();
    let h = 5381;
    for (let i = 0; i < s.length; i++) {
        h = ((h << 5) + h) + s.charCodeAt(i);
        h = h & 0xFFFFFFFF;
    }
    return h.toString(16);
}
function getHintFromAnswer(answer) {
    const t = (answer || '').trim();
    if (t.length === 0) return '?';
    if (t.length === 1) return t + '...';
    return t.substring(0, 2) + '...';
}
function getFlagEmoji(cc) {
    if (!cc || cc.length !== 2) return '🌐';
    return String.fromCodePoint(...cc.toUpperCase().split('').map(c => 127397 + c.charCodeAt()));
}
function formatDateBn(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString(LANG === 'en' ? 'en-GB' : 'bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });
}
function formatMonthBn(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString(LANG === 'en' ? 'en-GB' : 'bn-BD', { year: 'numeric', month: 'long' });
}
function daysAgo(dateStr) {
    const d = new Date(dateStr);
    const t = new Date();
    t.setHours(0,0,0,0); d.setHours(0,0,0,0);
    return Math.floor((t - d) / (1000 * 60 * 60 * 24));
}
function getItemByName(name) {
    return appData.itemList.find(i => i.name === name) || { name, type: 'money' };
}
function itemOf(name) { return appData.itemList.find(i => i.name === name) || null; }
function unitOf(name) { const it = itemOf(name); return it && it.unit ? it.unit : null; }
function getCustomerTotals(cus) { return Calc.totals(cus); }

// বিক্রির লেখা: "পেন (5 পিস)" — আইটেমের নিজের একক থাকলে সেটা, না থাকলে কেস/পরিমাণ
function txLabel(t) {
    const it = getItemByName(t.tp);
    const unit = unitOf(t.tp);
    let text = t.tp;
    if (t.qty) {
        if (it.type === 'carton') text += ` (${t.qty} ${unit || 'কার্টুন'})`;
        else if (it.type === 'free') text += ` (${t.qty} ${unit || 'পরিমাণ'})`;
    }
    return { icon: itemIconOf(it), text };
}

function avatarColor(name) {
    const colors = [['#4f46e5','#4338ca'],['#ec4899','#be185d'],['#f59e0b','#b45309'],['#10b981','#047857'],['#8b5cf6','#6d28d9'],['#06b6d4','#0e7490'],['#ef4444','#b91c1c'],['#84cc16','#4d7c0f']];
    let h = 0;
    for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
    return colors[Math.abs(h) % colors.length];
}
function getInitial(name) { return (name || '?').trim().charAt(0).toUpperCase() || '?'; }
function avatarHtml(cus) {
    if (cus.photo) return `<img src="${cus.photo}" alt="${cus.name}">`;
    const c = avatarColor(cus.name);
    return `<span style="background: linear-gradient(135deg, ${c[0]}, ${c[1]}); width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:white; font-weight:800;">${getInitial(cus.name)}</span>`;
}

function getMyAccount() {
    if (!currentUser) return null;
    if (currentUser.role === 'owner') return appData.owner;
    return appData.employees.find(e => e.id === currentUser.id);
}

// ================== 3. সেটআপ ও লগইন ==================
// ---- ইউজারনেম মনে রাখা (শুধু এই ফোনে; পাসওয়ার্ড কখনো সেভ হয় না) ----
function loadSavedUsers() {
    try { const o = JSON.parse(localStorage.getItem('bkUsers')) || {}; return { list: Array.isArray(o.list) ? o.list : [], last: o.last || '', remember: o.remember !== false }; }
    catch (e) { return { list: [], last: '', remember: true }; }
}
function storeSavedUsers(o) { try { localStorage.setItem('bkUsers', JSON.stringify(o)); } catch (e) {} }
function rememberLoginUser(username) {
    const o = loadSavedUsers(), cb = document.getElementById('loginRemember');
    o.remember = cb ? cb.checked : true;
    o.list = o.list.filter(u => u !== username);
    if (o.remember) { o.list.unshift(username); o.last = username; }
    else if (o.last === username) o.last = '';
    storeSavedUsers(o);
}
function savedUserLabel(username) {
    const acc = (appData.owner && appData.owner.username === username) ? appData.owner : appData.employees.find(e => e.username === username);
    return acc ? acc.name + ' (' + username + ')' : null;      // মুছে ফেলা অ্যাকাউন্ট বাদ
}
function renderSavedUsers(focusDelay) {
    const o = loadSavedUsers(), sel = document.getElementById('loginUserPick'), wrap = document.getElementById('loginSavedWrap');
    document.getElementById('loginRemember').checked = o.remember;
    const items = o.list.map(u => ({ u, label: savedUserLabel(u) })).filter(x => x.label);
    sel.innerHTML = '<option value="">সংরক্ষিত ইউজারনেম থেকে বাছুন</option>' + items.map(x => `<option value="${escapeHtml(x.u)}">${escapeHtml(x.label)}</option>`).join('');
    wrap.style.display = items.length ? 'block' : 'none';
    document.getElementById('loginUser').style.paddingRight = items.length ? '52px' : '';
    const input = document.getElementById('loginUser');
    const last = items.find(x => x.u === o.last);
    if (last && !input.value) { input.value = last.u; sel.value = last.u; }
    document.getElementById('loginForget').style.display = sel.value ? 'inline' : 'none';
    setTimeout(() => document.getElementById(input.value ? 'loginPass' : 'loginUser').focus(), focusDelay || 0);
}
function pickLoginUser() {
    const sel = document.getElementById('loginUserPick');
    if (sel.value) document.getElementById('loginUser').value = sel.value;
    document.getElementById('loginForget').style.display = sel.value ? 'inline' : 'none';
    document.getElementById('loginPass').focus();
    fpUpdateLogin();
}
function forgetLoginUser() {
    const sel = document.getElementById('loginUserPick'), u = sel.value;
    if (!u) return;
    const o = loadSavedUsers();
    o.list = o.list.filter(x => x !== u);
    if (o.last === u) o.last = '';
    storeSavedUsers(o);
    document.getElementById('loginUser').value = '';
    renderSavedUsers(0);
}

function showLoginScreen(focusDelay) {
    const el = document.getElementById('loginScreen');
    el.classList.add('active');
    el.style.display = 'flex';
    const shopEl = document.getElementById('loginShopName');
    if (appData.shop.name) shopEl.innerText = '🏪 ' + appData.shop.name;
    renderSavedUsers(focusDelay);
    fpUpdateLogin();
}


// ---------- 🔄 রিফ্রেশ (লগইন না হারিয়ে ক্লাউড থেকে নতুন ডেটা) ----------
let RF_BUSY = false;
function rfToast(m) {
    try {
        const old = document.getElementById('rfToast'); if (old) old.remove();
        const d = document.createElement('div'); d.id = 'rfToast'; d.className = 'rf-toast'; d.setAttribute('data-nt', '');
        d.textContent = (typeof LANG !== 'undefined' && LANG === 'en') ? i18nTr(m) : m;
        document.body.appendChild(d); setTimeout(() => { if (d.parentNode) d.remove(); }, 2200);
    } catch (e) {}
}
async function refreshAll(btn) {
    if (RF_BUSY) return;
    RF_BUSY = true; if (btn) btn.classList.add('spin');
    let msg = '✅ আপডেট হয়েছে';
    try {
        if (CS && !CS.needKey) {
            let w = 0; while (csBusy && w < 80) { await new Promise(r => setTimeout(r, 100)); w++; }
            await syncNow(true);
            if (CS.err) msg = '❌ ' + CS.err;
        } else if (CS && CS.needKey) msg = '❌ দোকান কোড দিন (সেটিংস → ক্লাউড সিঙ্ক)';
        else msg = '✅ নতুন করে সাজানো হয়েছে';
        cloudRefreshUI();
        try { if (currentUser && !currentUser.viewer) { if (typeof renderStock === 'function') renderStock(); if (typeof renderReports === 'function') renderReports(); } } catch (e) {}
        try { applyLang(); } catch (e) {}
    } catch (e) { msg = '❌ আপডেট হয়নি — ইন্টারনেট দেখুন'; }
    if (btn) btn.classList.remove('spin');
    RF_BUSY = false;
    rfToast(msg);
}
// ---------- ব্রাউজার রিফ্রেশেও লগইন ধরে রাখা (শুধু তদারকি/স্টাফ, ট্যাব বন্ধ করলে শেষ) ----------
function bkSessSave() {
    try { if (currentUser && currentUser.role !== 'owner') sessionStorage.setItem('bkSess', JSON.stringify({ id: currentUser.id, u: currentUser.username })); } catch (e) {}
}
function bkSessClear() { try { sessionStorage.removeItem('bkSess'); } catch (e) {} }
function bkSessRestore() {
    try {
        const j = JSON.parse(sessionStorage.getItem('bkSess') || 'null'); if (!j) return false;
        const a = (appData.employees || []).find(e => e.id === j.id && e.username === j.u); if (!a) { bkSessClear(); return false; }
        currentUser = { role: 'employee', id: a.id, name: a.name, username: a.username, viewer: !!a.viewer };
        openMainApp(); return true;
    } catch (e) { return false; }
}
/* ===== থিম ===== */
const BK_THEMES = [
    { id: 'default',  n: 'ডিফল্ট',  sw: 'linear-gradient(135deg,#e31e24,#006a4e,#f093fb)', bar: '#4f46e5' },
    { id: 'midnight', n: 'মিডনাইট', sw: 'linear-gradient(135deg,#0f172a,#312e81,#6366f1)', bar: '#0b1020' },
    { id: 'ocean',    n: 'ওশান',    sw: 'linear-gradient(135deg,#0c4a6e,#0891b2,#2dd4bf)', bar: '#0891b2' },
    { id: 'glass',    n: 'গ্লাস',    sw: 'linear-gradient(135deg,#7c3aed,#c026d3,#fb7185)', bar: '#7c3aed' },
    { id: 'sunset',   n: 'সানসেট',  sw: 'linear-gradient(135deg,#be123c,#ea580c,#fbbf24)', bar: '#ea580c' }
];
function themeNow() { try { const t = localStorage.getItem('bkTheme'); if (BK_THEMES.some(x => x.id === t)) return t; } catch (e) {} return 'default'; }
function applyTheme(id) {
    if (!BK_THEMES.some(x => x.id === id)) id = 'default';
    document.documentElement.setAttribute('data-theme', id);
    try { localStorage.setItem('bkTheme', id); } catch (e) {}
    const t = BK_THEMES.find(x => x.id === id);
    let m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', t.bar);
    const sub = document.getElementById('themeSub'); if (sub) sub.textContent = t.n;
    const g = document.getElementById('themeGrid');
    if (g) g.querySelectorAll('.th-opt').forEach(el => el.classList.toggle('on', el.dataset.id === id));
}
function openThemeModal() {
    const g = document.getElementById('themeGrid'); if (!g) return;
    const cur = themeNow();
    g.innerHTML = BK_THEMES.map(t => '<div class="th-opt' + (t.id === cur ? ' on' : '') + '" data-id="' + t.id + '" onclick="applyTheme(\'' + t.id + '\')"><span class="th-ck">✓</span><div class="th-sw" style="background:' + t.sw + '"><b></b><i></i></div>' + t.n + '</div>').join('');
    openModal('themeModal');
}
applyTheme(themeNow());

/* নিচের বোতামে আতশবাজি / তারা (সানসেট ও গ্লাস থিমে) */
function navBurst(btn) {
    try {
        const th = document.documentElement.getAttribute('data-theme');
        if (th !== 'sunset' && th !== 'glass' && th !== 'midnight') return;
        const cols = th === 'sunset' ? ['#fbbf24', '#f97316', '#ef4444', '#fde68a'] : th === 'glass' ? ['#f0abfc', '#c084fc', '#93c5fd', '#fff'] : ['#22d3ee', '#a78bfa', '#f0abfc', '#fde68a'];
        const host = btn.querySelector('.nav-icon') || btn;
        for (let i = 0; i < 14; i++) {
            const p = document.createElement('span');
            p.className = 'nv-part' + (th !== 'sunset' && i % 2 ? ' star' : '');
            const a = (Math.PI * 2 * i) / 14, d = 22 + Math.random() * 16;
            p.style.setProperty('--dx', Math.cos(a) * d + 'px');
            p.style.setProperty('--dy', Math.sin(a) * d + 'px');
            p.style.background = cols[i % cols.length];
            host.appendChild(p);
            setTimeout(() => p.remove(), 850);
        }
    } catch (e) {}
}
document.addEventListener('click', e => { const b = e.target.closest && e.target.closest('.nav-btn'); if (b) navBurst(b); }, true);

function initApp() {
    if (!appData.setupDone) {
        document.getElementById('setupScreen').classList.add('active');
        document.getElementById('setupScreen').style.display = 'flex';
    } else {
        if (!bkSessRestore()) showLoginScreen(400);
    }
}
function completeSetup() {
    const shopName = document.getElementById('setupShopName').value.trim();
    const ownerName = document.getElementById('setupOwnerName').value.trim();
    const username = document.getElementById('setupUsername').value.trim().toLowerCase();
    const pass1 = document.getElementById('setupPass1').value.trim();
    const pass2 = document.getElementById('setupPass2').value.trim();
    const txPin1 = document.getElementById('setupTxPin1').value.trim();
    const txPin2 = document.getElementById('setupTxPin2').value.trim();
    const questionSel = document.getElementById('setupQuestion').value;
    const customQ = document.getElementById('setupCustomQuestion').value.trim();
    const answer = document.getElementById('setupAnswer').value.trim();
    const errBox = document.getElementById('setupErrorBox');
    const showError = (m) => { errBox.innerText = m; errBox.style.display = 'block'; errBox.scrollIntoView({ behavior: 'smooth', block: 'center' }); };

    if (!shopName || shopName.length < 2) return showError('❌ দোকানের নাম কমপক্ষে ২ অক্ষরের হতে হবে');
    if (!ownerName || ownerName.length < 2) return showError('❌ আপনার নাম কমপক্ষে ২ অক্ষরের হতে হবে');
    if (!username || username.length < 3) return showError('❌ ইউজারনেম কমপক্ষে ৩ অক্ষরের হতে হবে');
    if (!/^[a-z0-9_]+$/.test(username)) return showError('❌ ইউজারনেমে শুধু ছোট হাতের ইংরেজি, সংখ্যা ও _ ব্যবহার করুন');
    if (pass1.length < 4) return showError('❌ পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে');
    if (pass1 !== pass2) return showError('❌ দুইবার একই পাসওয়ার্ড লিখুন');
    if (txPin1.length < 4) return showError('❌ লেনদেনের পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে');
    if (txPin1 !== txPin2) return showError('❌ লেনদেনের পাসওয়ার্ড দুইবার একই লিখুন');

    let question = questionSel;
    if (!question) return showError('❌ একটি সিকিউরিটি প্রশ্ন নির্বাচন করুন');
    if (question === '__custom__') {
        question = customQ;
        if (!question) return showError('❌ নিজের প্রশ্নটি লিখুন');
    }
    if (answer.length < 2) return showError('❌ সিকিউরিটি প্রশ্নের উত্তর কমপক্ষে ২ অক্ষরের হতে হবে');

    appData.shop.name = shopName;
    appData.txPinHash = hashSecret(txPin1);
    appData.owner = {
        id: uid(),
        name: ownerName,
        username: username,
        passHash: hashSecret(pass1),
        photo: null,
        recovery: makeRecovery(question, answer)
    };
    appData.setupDone = true;
    save();

    errBox.style.display = 'none';
    const card = document.querySelector('.setup-card');
    card.innerHTML = `<div style="text-align:center; padding: 30px 20px;">
        <div style="font-size: 72px; margin-bottom: 16px;">🎉</div>
        <h2 style="color: #10b981; font-size: 26px; margin: 0 0 8px 0; font-weight:800;">সেটআপ সম্পন্ন!</h2>
        <p style="color: #475569; font-size: 14px; margin-bottom: 20px;">এখন লগইন করুন।</p>
    </div>`;
    setTimeout(() => {
        document.getElementById('setupScreen').style.display = 'none';
        document.getElementById('setupScreen').classList.remove('active');
        showLoginScreen(300);
    }, 1600);
}
function doLogin() {
    const username = document.getElementById('loginUser').value.trim().toLowerCase();
    const password = document.getElementById('loginPass').value;
    const errBox = document.getElementById('loginErrorBox');
    const showError = (m) => { errBox.innerText = m; errBox.style.display = 'block'; };
    errBox.style.display = 'none';

    if (!username || !password) return showError('❌ ইউজারনেম ও পাসওয়ার্ড দিন');

    const left = lockLeftSec('login');
    if (left) return showError(lockMsg(left));

    let acc = null, role = 'employee';
    if (appData.owner && appData.owner.username === username) { acc = appData.owner; role = 'owner'; }
    else acc = appData.employees.find(e => e.username === username) || null;
    if (acc && verifySecret(password, acc.passHash)) {
        lockClear('login');
        currentUser = { role: role, id: acc.id, name: acc.name, username: acc.username, viewer: role !== 'owner' && !!acc.viewer };
        rememberLoginUser(acc.username);
        bkSessSave();
        openMainApp();
        return;
    }
    const n = lockFail('login');
    showError(n > 0 ? '❌ ভুল ইউজারনেম বা পাসওয়ার্ড (আর ' + n + ' বার চেষ্টা করা যাবে)' : lockMsg(lockLeftSec('login')));
    document.getElementById('loginPass').value = '';
}

function openMainApp() {
    document.getElementById('loginScreen').classList.remove('active');
    document.getElementById('loginScreen').style.display = 'none';
    if (isViewer()) return openViewerApp();
    document.getElementById('mainApp').style.display = 'block';

    document.getElementById('umName').innerText = currentUser.name;
    document.getElementById('umRole').innerText = isOwner() ? 'মালিক' : 'স্টাফ';
    document.getElementById('appTitleMain').innerText = isOwner() ? 'বাকি খাতা' : 'বাকি খাতা (স্টাফ)';

    updateUserAvatar();
    updateSettingsVisibility();
    startMainApp();
    fpRefreshRow();
    setTimeout(bulkResume, 700);
    setTimeout(backupRemind, 1200);
}

function updateUserAvatar() {
    const acc = getMyAccount();
    const btn = document.getElementById('userInitial');
    const umAvatar = document.getElementById('umAvatar');
    
    if (acc && acc.photo) {
        if (btn) btn.innerHTML = `<img src="${acc.photo}">`;
        if (umAvatar) umAvatar.innerHTML = `<img src="${acc.photo}">`;
    } else {
        if (btn) btn.innerText = getInitial(currentUser.name);
        if (umAvatar) umAvatar.innerText = getInitial(currentUser.name);
    }
}

// শুধু মালিকের সেটিংস — স্টাফের কাছে তালাবদ্ধ দেখায়
const OWNER_ONLY_SETTINGS = ['backup', 'restore', 'employees', 'txpin', 'deletelog', 'pdfreport', 'cloud', 'notice', 'walert', 'recharge', 'bulk'];
function updateSettingsVisibility() {
    document.querySelectorAll('.settings-row').forEach(row => {
        // তালা দেওয়ার পর onclick বদলে যায়, তাই আসলটা data-এ রাখা হয় (আগে স্টাফ লগআউট করলে মালিকের সেটিংসও তালাবদ্ধ থেকে যেত)
        const orig = row.getAttribute('data-original-onclick') || row.getAttribute('onclick') || '';
        if (!OWNER_ONLY_SETTINGS.some(k => orig.includes("'" + k + "'"))) return;
        row.setAttribute('data-original-onclick', orig);
        if (isEmployee()) {
            row.classList.add('locked');
            row.setAttribute('onclick', 'showEmployeeLockedMsg()');
        } else {
            row.classList.remove('locked');
            row.setAttribute('onclick', orig);
        }
    });
    updateBackupWarn();
}
// ৩০ দিন ব্যাকআপ না নিলে সেটিংস আইকনে ও ব্যাকআপ সারিতে হলুদ দাগ (শুধু মালিক দেখে)
const BACKUP_WARN_DAYS = 7;
function backupDaysSince() {
    try {
        let t = Number(localStorage.getItem('bkLastBackup')) || Number(localStorage.getItem('bkFirstUse'));
        if (!t) { t = Date.now(); localStorage.setItem('bkFirstUse', String(t)); }
        return Math.floor((Date.now() - t) / 86400000);
    } catch (e) { return 0; }
}
function updateBackupWarn() {
    const days = backupDaysSince();
    const warn = !!isOwner() && days >= BACKUP_WARN_DAYS;
    const btn = document.querySelector('.nav-btn[data-page="settings"]');
    if (btn) btn.classList.toggle('has-warn', warn);
    const row = document.querySelector(".settings-row[onclick*=\"'backup'\"], .settings-row[data-original-onclick*=\"'backup'\"]");
    if (!row) return;
    const sub = row.querySelector('.sr-sub');
    if (sub && !sub.dataset.orig) sub.dataset.orig = sub.textContent;
    row.classList.toggle('warn', warn);
    if (sub) sub.textContent = warn ? '⚠️ ' + days + ' দিন ব্যাকআপ নেননি — এখনই নিন' : sub.dataset.orig;
}
function showEmployeeLockedMsg() {
    alert('🔒 এই কাজটি শুধু মালিক করতে পারবেন।');
}

function doLogout() {
    if (!confirm('লগআউট করতে চান?')) return;
    bkSessClear();
    currentUser = null;
    closeUserMenu();
    document.getElementById('viewerScreen').style.display = 'none';
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('loginScreen').classList.add('active');
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
    document.getElementById('loginErrorBox').style.display = 'none';
    switchPage('home');
    renderSavedUsers(300);
}

// ================== 4. অ্যাকাউন্ট: ইউজার মেনু, প্রোফাইল, পাসওয়ার্ড, রিকভারি ==================
function toggleUserMenu(e) {
    if (e) e.stopPropagation();
    document.getElementById('userMenu').classList.toggle('show');
}
function closeUserMenu() {
    document.getElementById('userMenu').classList.remove('show');
}

function openMyProfile() {
    closeUserMenu();
    const acc = getMyAccount();
    if (!acc) return;
    
    const pvPhoto = document.getElementById('pvPhoto');
    const myPhotoActions = document.getElementById('myPhotoActions');
    
    if (acc.photo) {
        pvPhoto.innerHTML = `<img src="${acc.photo}">`;
        myPhotoActions.style.display = 'flex';
    } else {
        pvPhoto.innerHTML = `<span id="pvPhotoText">${getInitial(currentUser.name)}</span>`;
        myPhotoActions.style.display = 'none';
    }
    
    document.getElementById('pvName').innerText = currentUser.name;
    document.getElementById('pvRole').innerText = isOwner() ? '👑 মালিক' : '👤 স্টাফ';
    document.getElementById('pvDetail').innerText = 'ইউজারনেম: ' + currentUser.username;
    openModal('myProfileModal');
}

function openMyPhotoSourceModal() {
    openModal('myPhotoSourceModal');
}
function pickMyFromCamera() {
    closeModal('myPhotoSourceModal');
    document.getElementById('myCameraInput').click();
}
function pickMyFromGallery() {
    closeModal('myPhotoSourceModal');
    document.getElementById('myGalleryInput').click();
}
function handleMyPhotoUpload(e) {
    const file = e.target.files[0];
    e.target.value = '';
    openCropper(file, function(dataUrl) {
        const acc = getMyAccount();
        if (!acc) return;
        acc.photo = dataUrl;
        save();
        updateUserAvatar();
        openMyProfile();
    });
}


// ---------- ছবি কাটা (crop): টেনে সরান, স্লাইডারে বড়-ছোট করুন ----------
const CROP_OUT = 400;                 // শেষ ছবি ৪০০×৪০০ (ছোট সাইজ, ডেটা হালকা)
let crop = null;
function openCropper(file, onDone) {
    if (!file) return;
    if (!file.type.startsWith('image/')) return alert('শুধু ছবি দিন');
    if (file.size > 15 * 1024 * 1024) return alert('ছবি ১৫ MB এর কম হতে হবে');
    const reader = new FileReader();
    reader.onload = function(ev) {
        const img = new Image();
        img.onload = function() {
            const cv = document.getElementById('cropCanvas');
            const size = cv.width;
            const min = Math.max(size / img.width, size / img.height);          // পুরো বর্গ ঢাকে এমন সবচেয়ে ছোট মাপ
            crop = { img, size, min, zoom: 1, x: (size - img.width * min) / 2, y: (size - img.height * min) / 2, onDone, ptrs: {} };
            document.getElementById('cropZoom').value = 1;
            openModal('cropModal');
            cropDraw();
        };
        img.onerror = function() { alert('ছবিটি খোলা যায়নি'); };
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
}
function cropScale() { return crop.min * crop.zoom; }
function cropClamp() {
    const w = crop.img.width * cropScale(), h = crop.img.height * cropScale();
    crop.x = Math.min(0, Math.max(crop.size - w, crop.x));
    crop.y = Math.min(0, Math.max(crop.size - h, crop.y));
}
function cropDraw() {
    if (!crop) return;
    cropClamp();
    const cv = document.getElementById('cropCanvas'), g = cv.getContext('2d'), S = crop.size, sc = cropScale();
    g.clearRect(0, 0, S, S);
    g.fillStyle = '#0f172a'; g.fillRect(0, 0, S, S);
    g.globalAlpha = 0.4; g.drawImage(crop.img, crop.x, crop.y, crop.img.width * sc, crop.img.height * sc);   // বাইরের অংশ ঝাপসা
    g.globalAlpha = 1;
    g.save(); g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2); g.clip();                    // গোল অংশই প্রোফাইলে দেখাবে
    g.drawImage(crop.img, crop.x, crop.y, crop.img.width * sc, crop.img.height * sc);
    g.restore();
    g.strokeStyle = '#fff'; g.lineWidth = 2; g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 2, 0, Math.PI * 2); g.stroke();
}
function cropSetZoom(z) {         // ঠিক মাঝখান ধরে বড়-ছোট
    if (!crop) return;
    z = Math.min(4, Math.max(1, z));
    const S = crop.size, old = cropScale(), cx = (S / 2 - crop.x) / old, cy = (S / 2 - crop.y) / old;
    crop.zoom = z;
    const ns = cropScale();
    crop.x = S / 2 - cx * ns; crop.y = S / 2 - cy * ns;
    document.getElementById('cropZoom').value = z;
    cropDraw();
}
function cropPointer(type, e) {
    if (!crop) return;
    const cv = document.getElementById('cropCanvas'), k = crop.size / cv.getBoundingClientRect().width, P = crop.ptrs;
    if (type === 'down') { cv.setPointerCapture && cv.setPointerCapture(e.pointerId); P[e.pointerId] = { x: e.clientX, y: e.clientY }; }
    else if (type === 'up') { delete P[e.pointerId]; crop.pinch = null; }
    else if (type === 'move' && P[e.pointerId]) {
        const ids = Object.keys(P);
        if (ids.length === 2) {                                   // দুই আঙুলে চিমটি
            P[e.pointerId] = { x: e.clientX, y: e.clientY };
            const d = Math.hypot(P[ids[0]].x - P[ids[1]].x, P[ids[0]].y - P[ids[1]].y);
            if (crop.pinch) cropSetZoom(crop.zoom * d / crop.pinch);
            crop.pinch = d;
        } else {
            crop.x += (e.clientX - P[e.pointerId].x) * k; crop.y += (e.clientY - P[e.pointerId].y) * k;
            P[e.pointerId] = { x: e.clientX, y: e.clientY };
            cropDraw();
        }
    }
}
function cropConfirm() {
    if (!crop) return;
    const out = document.createElement('canvas'); out.width = out.height = CROP_OUT;
    const g = out.getContext('2d'), r = CROP_OUT / crop.size, sc = cropScale();
    g.fillStyle = '#fff'; g.fillRect(0, 0, CROP_OUT, CROP_OUT);
    g.drawImage(crop.img, crop.x * r, crop.y * r, crop.img.width * sc * r, crop.img.height * sc * r);
    const cb = crop.onDone, data = out.toDataURL('image/jpeg', 0.85);
    crop = null; closeModal('cropModal');
    if (cb) cb(data);
}
function cropCancel() { crop = null; closeModal('cropModal'); }

function removeMyPhoto() {
    showConfirmDelete('আপনার ছবিটি ডিলিট করবেন?', function() {
        const acc = getMyAccount();
        if (acc) {
            acc.photo = null;
            save();
            updateUserAvatar();
            openMyProfile();
        }
    });
}

// পাসওয়ার্ড ঘরে সংখ্যা-কিবোর্ড ↔ পুরো কিবোর্ড বদল (পেমেন্টের জমার ঘরেও এটাই চলে)
function togglePassKeyboard(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isNum = (input.getAttribute('inputmode') === 'numeric');
    input.blur();
    if (isNum) {
        input.setAttribute('inputmode', 'text');
        input.removeAttribute('pattern');
        if (btnEl) btnEl.classList.add('active');
    } else {
        input.setAttribute('inputmode', 'numeric');
        input.setAttribute('pattern', '[0-9]*');
        if (btnEl) btnEl.classList.remove('active');
    }
    setTimeout(() => {
        input.focus();
        try {
            const l = input.value.length;
            input.setSelectionRange(l, l);
        } catch(e) {}
    }, 80);
}

function openChangeMyPassword() {
    closeUserMenu();
    const acc = getMyAccount();
    if (!acc) return;
    
    if (!acc.recovery || !acc.recovery.question) {
        alert('❌ আপনার সিকিউরিটি প্রশ্ন সেট করা নেই।\n\nআগে "সিকিউরিটি প্রশ্ন সেট" থেকে প্রশ্ন সেট করুন।');
        return;
    }
    
    document.getElementById('changePassStep0').style.display = 'block';
    document.getElementById('changePassStep1').style.display = 'none';
    document.getElementById('changePassQuestion').innerText = acc.recovery.question;
    document.getElementById('changePassHint').innerText = acc.recovery.hint;
    document.getElementById('changePassAnswerInput').value = '';
    document.getElementById('changePassErrorBox').style.display = 'none';
    document.getElementById('passErrorMsg').style.display = 'none';
    document.getElementById('changePassActionBtn').innerText = 'যাচাই করুন';
    document.getElementById('changePassActionBtn').setAttribute('onclick', 'verifyChangePassAnswer()');
    
    ['newPassInput','confirmPassInput'].forEach(id => {
        const el = document.getElementById(id);
        el.value = ''; el.type = 'password';
    });
    document.querySelectorAll('#changePassModal .toggle-eye').forEach(eye => eye.innerText = '👁️');
    
    openModal('changePassModal');
    setTimeout(() => document.getElementById('changePassAnswerInput').focus(), 300);
}

function verifyChangePassAnswer() {
    const ans = document.getElementById('changePassAnswerInput').value.trim();
    const errBox = document.getElementById('changePassErrorBox');
    const acc = getMyAccount();
    
    if (!ans) {
        errBox.innerText = '❌ উত্তর লিখুন';
        errBox.style.display = 'block';
        return;
    }
    
    const left = lockLeftSec('recovery');
    if (left) { errBox.innerText = lockMsg(left); errBox.style.display = 'block'; return; }
    if (checkAnswer(acc.recovery, ans)) {
        lockClear('recovery');
        errBox.style.display = 'none';
        document.getElementById('changePassStep0').style.display = 'none';
        document.getElementById('changePassStep1').style.display = 'block';
        document.getElementById('changePassActionBtn').innerText = 'সেভ করুন';
        document.getElementById('changePassActionBtn').setAttribute('onclick', 'saveNewPassword()');
        setTimeout(() => document.getElementById('newPassInput').focus(), 200);
    } else {
        const n = lockFail('recovery');
        errBox.innerText = n > 0 ? '❌ ভুল উত্তর! আর ' + n + ' বার চেষ্টা করা যাবে' : lockMsg(lockLeftSec('recovery'));
        errBox.style.display = 'block';
        document.getElementById('changePassAnswerInput').value = '';
    }
}

function saveNewPassword() {
    const newPass = document.getElementById('newPassInput').value.trim();
    const confirmPass = document.getElementById('confirmPassInput').value.trim();
    const errEl = document.getElementById('passErrorMsg');
    const showError = (msg) => { errEl.innerText = msg; errEl.style.display = 'block'; };
    errEl.style.display = 'none';

    const myAccount = getMyAccount();
    if (!myAccount) return showError('❌ অ্যাকাউন্ট খুঁজে পাওয়া যায়নি');
    if (newPass.length < 4) return showError('❌ নতুন পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে!');
    if (newPass !== confirmPass) return showError('❌ নতুন পাসওয়ার্ড দুইবার একই হয়নি!');

    setAccountPassword(myAccount, newPass);
    save();
    closeModal('changePassModal');
    alert('✅ পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!');
}

function openMyRecoverySetup() {
    closeUserMenu();
    const acc = getMyAccount();
    if (!acc) return;

    const sel = document.getElementById('recQuestionSelect');
    const customWrap = document.getElementById('customQuestionWrap');
    const customInput = document.getElementById('customQuestionInput');
    const ansInput = document.getElementById('recAnswerInput');
    const errEl = document.getElementById('recSetupError');

    sel.value = '';
    customWrap.style.display = 'none';
    customInput.value = '';
    ansInput.value = '';
    errEl.style.display = 'none';

    const rec = acc.recovery;
    if (rec) {
        const preBuilt = ['আপনার মায়ের নাম কী?','আপনার প্রথম স্কুলের নাম কী?','আপনার প্রিয় শিক্ষকের নাম কী?','আপনার জন্মশহরের নাম কী?','আপনার প্রিয় খাবারের নাম কী?','আপনার প্রথম বন্ধুর নাম কী?','আপনার প্রিয় রঙের নাম কী?','আপনার প্রথম পোষা প্রাণীর নাম কী?'];
        if (preBuilt.includes(rec.question)) {
            sel.value = rec.question;
        } else {
            sel.value = '__custom__';
            customWrap.style.display = 'block';
            customInput.value = rec.question;
        }
    }
    openModal('recoverySetupModal');
}

function onRecQuestionChange() {
    const sel = document.getElementById('recQuestionSelect');
    document.getElementById('customQuestionWrap').style.display = (sel.value === '__custom__') ? 'block' : 'none';
}

function saveRecoverySetup() {
    const sel = document.getElementById('recQuestionSelect');
    const customInput = document.getElementById('customQuestionInput');
    const ansInput = document.getElementById('recAnswerInput');
    const errEl = document.getElementById('recSetupError');
    const showError = (m) => { errEl.innerText = m; errEl.style.display = 'block'; };
    errEl.style.display = 'none';

    let question = sel.value;
    if (!question) return showError('❌ একটি প্রশ্ন নির্বাচন করুন');
    if (question === '__custom__') {
        question = customInput.value.trim();
        if (!question) return showError('❌ নিজের প্রশ্নটি লিখুন');
    }
    const answer = ansInput.value.trim();
    if (answer.length < 2) return showError('❌ উত্তর কমপক্ষে ২ অক্ষরের হতে হবে');

    const acc = getMyAccount();
    if (!acc) return;
    acc.recovery = makeRecovery(question, answer);
    save();
    closeModal('recoverySetupModal');
    alert('✅ সিকিউরিটি প্রশ্ন সেভ হয়েছে!\n\nপ্রশ্ন: ' + question + '\nহিন্ট: "' + acc.recovery.hint + '"');
}

// "পাসওয়ার্ড ভুলে গেছি" মডাল দেখানো (অন্য খোলা মডাল বন্ধ করে)
function showRecoveryModal() {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
        if (m.id !== 'recoveryFlowModal') {
            m.classList.remove('active');
            m.style.display = 'none';
        }
    });
    openModal('recoveryFlowModal');
}
function openLoginRecovery() {
    recoveryAttempts = 0;
    recoveryTargetUser = null;
    
    document.getElementById('recoveryModalTitle').innerText = '🔓 পাসওয়ার্ড ভুলে গেছেন?';
    document.getElementById('recoveryStep0').style.display = 'block';
    document.getElementById('recoveryStep1').style.display = 'none';
    document.getElementById('recoveryStep2').style.display = 'none';
    document.getElementById('recoveryUserInput').value = '';
    document.getElementById('recoveryUserErrorBox').style.display = 'none';
    document.getElementById('recoveryAnswerInput').value = '';
    document.getElementById('recoveryErrorBox').style.display = 'none';
    document.getElementById('recoveryResetError').style.display = 'none';
    document.getElementById('recoveryNewPass').value = '';
    document.getElementById('recoveryConfirmPass').value = '';
    document.getElementById('recoveryActionBtn').innerText = 'পরবর্তী →';
    document.getElementById('recoveryActionBtn').setAttribute('onclick', 'verifyRecoveryUser()');

    showRecoveryModal();
    setTimeout(() => document.getElementById('recoveryUserInput').focus(), 300);
}

function openRecoveryFlowFromPin() {
    closePinModal();
    const acc = getMyAccount();
    if (!acc) {
        alert('❌ অ্যাকাউন্ট খুঁজে পাওয়া যায়নি');
        return;
    }
    if (!acc.recovery || !acc.recovery.question) {
        alert('❌ আপনার সিকিউরিটি প্রশ্ন সেট করা নেই। সেটিংস থেকে সেট করুন।');
        return;
    }
    
    recoveryAttempts = 0;
    recoveryTargetUser = acc;
    document.getElementById('recoveryModalTitle').innerText = '🔓 পাসওয়ার্ড ভুলে গেছেন?';
    document.getElementById('recoveryStep0').style.display = 'none';
    document.getElementById('recoveryStep1').style.display = 'block';
    document.getElementById('recoveryStep2').style.display = 'none';
    document.getElementById('recoveryAnswerInput').value = '';
    document.getElementById('recoveryErrorBox').style.display = 'none';
    document.getElementById('recoveryResetError').style.display = 'none';
    document.getElementById('recoveryNewPass').value = '';
    document.getElementById('recoveryConfirmPass').value = '';
    document.getElementById('recoveryActionBtn').innerText = 'যাচাই করুন';
    document.getElementById('recoveryActionBtn').setAttribute('onclick', 'verifyRecoveryAnswer()');
    
    document.getElementById('recShowQuestion').innerText = acc.recovery.question;
    document.getElementById('recShowHint').innerText = acc.recovery.hint;

    showRecoveryModal();
    setTimeout(() => document.getElementById('recoveryAnswerInput').focus(), 300);
}

function verifyRecoveryUser() {
    const username = document.getElementById('recoveryUserInput').value.trim().toLowerCase();
    const errBox = document.getElementById('recoveryUserErrorBox');
    errBox.style.display = 'none';

    if (!username) {
        errBox.innerText = '❌ ইউজারনেম লিখুন';
        errBox.style.display = 'block';
        return;
    }

    let acc = null;
    if (appData.owner && appData.owner.username === username) acc = appData.owner;
    else acc = appData.employees.find(e => e.username === username);

    if (!acc) {
        errBox.innerText = '❌ এই ইউজারনেম নেই';
        errBox.style.display = 'block';
        return;
    }
    if (!acc.recovery || !acc.recovery.question) {
        errBox.innerText = '❌ এই অ্যাকাউন্টে সিকিউরিটি প্রশ্ন সেট করা হয়নি';
        errBox.style.display = 'block';
        return;
    }

    recoveryTargetUser = acc;
    document.getElementById('recoveryStep0').style.display = 'none';
    document.getElementById('recoveryStep1').style.display = 'block';
    document.getElementById('recShowQuestion').innerText = acc.recovery.question;
    document.getElementById('recShowHint').innerText = acc.recovery.hint;
    document.getElementById('recoveryActionBtn').innerText = 'যাচাই করুন';
    document.getElementById('recoveryActionBtn').setAttribute('onclick', 'verifyRecoveryAnswer()');
    setTimeout(() => document.getElementById('recoveryAnswerInput').focus(), 200);
}

function verifyRecoveryAnswer() {
    const ans = document.getElementById('recoveryAnswerInput').value.trim();
    const errBox = document.getElementById('recoveryErrorBox');
    if (!ans) {
        errBox.innerText = '❌ উত্তর লিখুন';
        errBox.style.display = 'block';
        return;
    }
    const left = lockLeftSec('recovery');
    if (left) { errBox.innerText = lockMsg(left); errBox.style.display = 'block'; return; }
    if (checkAnswer(recoveryTargetUser.recovery, ans)) {
        lockClear('recovery');
        errBox.style.display = 'none';
        document.getElementById('recoveryStep1').style.display = 'none';
        document.getElementById('recoveryStep2').style.display = 'block';
        document.getElementById('recoveryActionBtn').innerText = 'সেভ করুন';
        document.getElementById('recoveryActionBtn').setAttribute('onclick', 'saveRecoveredPassword()');
        setTimeout(() => document.getElementById('recoveryNewPass').focus(), 200);
    } else {
        const n = lockFail('recovery');
        errBox.innerText = n > 0 ? '❌ ভুল উত্তর! আর ' + n + ' বার চেষ্টা করা যাবে' : lockMsg(lockLeftSec('recovery'));
        errBox.style.display = 'block';
        document.getElementById('recoveryAnswerInput').value = '';
    }
}

function saveRecoveredPassword() {
    const p1 = document.getElementById('recoveryNewPass').value.trim();
    const p2 = document.getElementById('recoveryConfirmPass').value.trim();
    const errEl = document.getElementById('recoveryResetError');
    const showError = (m) => { errEl.innerText = m; errEl.style.display = 'block'; };
    errEl.style.display = 'none';

    if (p1.length < 4) return showError('❌ পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে');
    if (p1 !== p2) return showError('❌ দুইবার একই পাসওয়ার্ড লিখুন');

    setAccountPassword(recoveryTargetUser, p1);
    save();
    closeModal('recoveryFlowModal');
    alert('✅ পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!\n\nইউজারনেম: ' + recoveryTargetUser.username + '\nনতুন পাসওয়ার্ড: ' + p1);
}

// ================== 5. স্টাফ ==================
function openEmployeesList() {
    if (!isOwner()) return showEmployeeLockedMsg();
    renderEmployeesList();
    openModal('employeesListModal');
}

function renderEmployeesList() {
    const wrap = document.getElementById('employeesListWrap');
    if (appData.employees.length === 0) {
        wrap.innerHTML = '<p style="text-align:center; color:#64748b; padding:20px; font-style:italic;">এখনো কোনো স্টাফ যোগ করা হয়নি।</p>';
        return;
    }
    wrap.innerHTML = '';
    appData.employees.forEach(emp => {
        const div = document.createElement('div');
        div.className = 'emp-item';
        const photoInner = emp.photo 
            ? `<img src="${emp.photo}">`
            : getInitial(emp.name);
        div.innerHTML = `
            <div class="emp-avatar">${photoInner}</div>
            <div class="emp-info">
                <div class="emp-name">${escapeHtml(emp.name)}</div>
                <div class="emp-user">👤 ${escapeHtml(emp.username)} ${emp.viewer ? '<span class="vw-badge sm">👁️ তদারকি</span>' : '<span class="st-badge">🧑‍💼 স্টাফ</span>'}</div>
            </div>
            ${emp.viewer ? `<button class="emp-del emp-perm" onclick="openViewerPerm('${emp.id}')">অনুমতি</button>` : ''}
            <button class="emp-del" onclick="deleteEmployee('${emp.id}')">ডিলিট</button>
        `;
        wrap.appendChild(div);
    });
}

let empRole = 'staff';
function permItemsHtml(sel) {
    const names = (appData.itemList || []).map(i => i.name).filter(Boolean);
    if (!names.length) return '<p style="font-size:12px;color:#64748b">আগে "যোগ করুন" পেজে আইটেম যোগ করুন।</p>';
    return names.map(n => {
        const st = Calc.stockInfo(appData, n);
        return `<label class="pk"><input type="checkbox" class="vp-chk" value="${escapeHtml(n)}" ${sel.includes(n) ? 'checked' : ''}> ${escapeHtml(n)} <small>${st.sold ? 'বিক্রি ' + st.sold : ''}</small></label>`;
    }).join('');
}
function setEmpRole(r) {
    empRole = r;
    document.getElementById('rpStaff').classList.toggle('on', r === 'staff');
    document.getElementById('rpView').classList.toggle('on', r === 'viewer');
    document.getElementById('viewerPerm').style.display = r === 'viewer' ? 'block' : 'none';
    if (r === 'viewer') document.getElementById('empPermItems').innerHTML = permItemsHtml([]);
}
let vpEmpId = '';
function openViewerPerm(id) {
    if (!isOwner()) return;
    const e = appData.employees.find(x => x.id === id); if (!e) return;
    vpEmpId = id;
    document.getElementById('vpTitle').textContent = '👁️ ' + e.name + ' — দেখার অনুমতি';
    document.getElementById('vpItems').innerHTML = permItemsHtml(e.viewItems || []);
    document.getElementById('vpPhone').checked = !!e.viewPhone;
    document.getElementById('vpErr').style.display = 'none';
    closeModal('employeesListModal'); openModal('viewerPermModal');
}
function saveViewerPerm() {
    const e = appData.employees.find(x => x.id === vpEmpId); if (!e) return;
    const items = [...document.querySelectorAll('#vpItems .vp-chk:checked')].map(c => c.value);
    if (!items.length) { const er = document.getElementById('vpErr'); er.textContent = '❌ অন্তত একটা পণ্য বাছুন'; er.style.display = 'block'; return; }
    e.viewItems = items; e.viewPhone = document.getElementById('vpPhone').checked;
    save(); closeModal('viewerPermModal'); openEmployeesList();
}
function openAddEmployeeModal() {
    if (!isOwner()) return;
    closeModal('employeesListModal');
    setEmpRole('staff'); document.getElementById('empPermPhone').checked = true;
    document.getElementById('empName').value = '';
    document.getElementById('empUsername').value = '';
    document.getElementById('empPass').value = '';
    document.getElementById('empAddError').style.display = 'none';
    openModal('employeeAddModal');
    setTimeout(() => document.getElementById('empName').focus(), 300);
}

function saveNewEmployee() {
    const name = document.getElementById('empName').value.trim();
    const username = document.getElementById('empUsername').value.trim().toLowerCase();
    const password = document.getElementById('empPass').value.trim();
    const errEl = document.getElementById('empAddError');
    const showError = (m) => { errEl.innerText = m; errEl.style.display = 'block'; };
    errEl.style.display = 'none';

    if (!name || name.length < 2) return showError('❌ নাম কমপক্ষে ২ অক্ষরের হতে হবে');
    if (!username || username.length < 3) return showError('❌ ইউজারনেম কমপক্ষে ৩ অক্ষরের হতে হবে');
    if (!/^[a-z0-9_]+$/.test(username)) return showError('❌ ইউজারনেমে শুধু ছোট হাতের ইংরেজি, সংখ্যা ও _ ব্যবহার করুন');
    if (password.length < 4) return showError('❌ পাসওয়ার্ড কমপক্ষে ৪ অক্ষরের হতে হবে');

    if (appData.owner.username === username) return showError('❌ এই ইউজারনেম আগে থেকেই আছে');
    if (appData.employees.some(e => e.username === username)) return showError('❌ এই ইউজারনেম আগে থেকেই আছে');
    const isV = empRole === 'viewer';
    const vItems = isV ? [...document.querySelectorAll('#empPermItems .vp-chk:checked')].map(c => c.value) : [];
    if (isV && !vItems.length) return showError('❌ অন্তত একটা পণ্য বাছুন');

    appData.employees.push({
        id: uid(),
        name: name,
        username: username,
        passHash: hashSecret(password),
        photo: null,
        recovery: null,
        createdAt: now(),
        createdBy: currentUser.name,
        viewer: isV,
        viewItems: vItems,
        viewPhone: isV && document.getElementById('empPermPhone').checked
    });
    save();
    closeModal('employeeAddModal');
    alert((isV ? '✅ তদারকি ইউজার যোগ হয়েছে!' : '✅ স্টাফ সফলভাবে যোগ হয়েছে!') + '\n\nইউজারনেম: ' + username + '\nপাসওয়ার্ড: ' + password);
    openEmployeesList();
}

function deleteEmployee(id) {
    if (!isOwner()) return showEmployeeLockedMsg();
    const emp = appData.employees.find(e => e.id === id);
    if (!emp) return;
    showConfirmDelete(`"${emp.name}" কে ডিলিট করবেন?`, function() {
        appData.employees = appData.employees.filter(e => e.id !== id);
        save();
        renderEmployeesList();
    });
}

// ================== 6. পেজ নেভিগেশন, মডাল, পাসওয়ার্ড ধাপ ==================
function switchPage(pageName, btnEl) {
    currentPage = pageName;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageName).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    else {
        const t = document.querySelector(`.nav-btn[data-page="${pageName}"]`);
        if (t) t.classList.add('active');
    }
    if (pageName === 'reports') renderReports();
    if (pageName === 'stock') renderStock();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// কোনো মডাল খোলা থাকলে পেছনের পেজ স্ক্রল বন্ধ
function syncBodyScroll() {
    document.body.style.overflow = document.querySelector('.modal-overlay.active') ? 'hidden' : '';
}
function openModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.add('active');
    el.style.display = 'flex';
    syncBodyScroll();
    const body = el.querySelector('.modal-body');
    if (body) body.scrollTop = 0;
}
function closeModal(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.classList.remove('active');
    el.style.display = 'none';
    syncBodyScroll();
}
function closePinModal() {
    closeModal('pinModal');
    pendingAction = null;
}
function togglePass(inputId, el) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') { input.type = 'text'; el.innerText = '🙈'; }
    else { input.type = 'password'; el.innerText = '👁️'; }
}

function checkMyPassword(callback) {
    pendingAction = callback;
    document.getElementById('pinInput').value = '';
    document.getElementById('pinInput').type = 'password';
    document.querySelectorAll('#pinModal .toggle-eye').forEach(e => e.innerText = '👁️');
    openModal('pinModal');
    setTimeout(() => document.getElementById('pinInput').focus(), 200);
}
function submitPin() {
    const val = document.getElementById('pinInput').value;
    const acc = getMyAccount();
    const err = guardedVerify('pin', () => acc && verifySecret(val, acc.passHash));
    if (!err) {
        const a = pendingAction;
        closePinModal();
        if (a) a();
    } else {
        alert(err);
        document.getElementById('pinInput').value = '';
    }
}

function showConfirmDelete(text, callback) {
    document.getElementById('confirmDeleteText').innerText = text;
    deleteCallback = callback;
    openModal('confirmDeleteModal');
}
function confirmDeleteAction() {
    const cb = deleteCallback;
    closeModal('confirmDeleteModal');
    deleteCallback = null;
    if (cb) cb();
}

// ---- লেনদেনের পাসওয়ার্ড ----
function requestTransactionPin(title, subtitle, callback) {
    pendingTxAction = callback;
    document.getElementById('txPinTitle').innerText = title || '🔐 লেনদেনের পাসওয়ার্ড দিন';
    document.getElementById('txPinSubtitle').innerText = subtitle || '';
    const inp = document.getElementById('txPinInput');
    inp.value = '';
    inp.type = 'password';
    document.querySelectorAll('#transactionPinModal .toggle-eye').forEach(e => e.innerText = '👁️');
    openModal('transactionPinModal');
    setTimeout(() => inp.focus(), 250);
}

function submitTransactionPin() {
    const val = document.getElementById('txPinInput').value.trim();
    if (!appData.txPinHash) {
        alert('❌ লেনদেনের পাসওয়ার্ড সেট করা নেই। সেটিংস থেকে সেট করুন।');
        return;
    }
    const err = guardedVerify('pin', () => verifySecret(val, appData.txPinHash));
    if (!err) {
        const action = pendingTxAction;
        closeModal('transactionPinModal');
        pendingTxAction = null;
        if (action) action();
    } else {
        alert(err);
        document.getElementById('txPinInput').value = '';
    }
}

function openChangeTxPin() {
    if (!isOwner()) return showEmployeeLockedMsg();
    ['oldTxPinInput','newTxPinInput','confirmTxPinInput'].forEach(id => {
        const el = document.getElementById(id);
        el.value = ''; el.type = 'password';
    });
    document.querySelectorAll('#changeTxPinModal .toggle-eye').forEach(e => e.innerText = '👁️');
    document.getElementById('txPinErrorMsg').style.display = 'none';
    openModal('changeTxPinModal');
    setTimeout(() => document.getElementById('oldTxPinInput').focus(), 250);
}

function saveNewTxPin() {
    const oldPin = document.getElementById('oldTxPinInput').value.trim();
    const newPin = document.getElementById('newTxPinInput').value.trim();
    const confPin = document.getElementById('confirmTxPinInput').value.trim();
    const errEl = document.getElementById('txPinErrorMsg');
    const showError = (m) => { errEl.innerText = m; errEl.style.display = 'block'; };
    errEl.style.display = 'none';

    const pinErr = guardedVerify('pin', () => verifySecret(oldPin, appData.txPinHash));
    if (pinErr) return showError(pinErr);
    if (newPin.length < 4) return showError('❌ কমপক্ষে ৪ অক্ষরের হতে হবে');
    if (newPin !== confPin) return showError('❌ দুইবার একই লিখুন');

    appData.txPinHash = hashSecret(newPin);
    save();
    closeModal('changeTxPinModal');
    alert('✅ লেনদেনের পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!');
}

// ================== 7. মূল অ্যাপ: ঘড়ি, দোকান, তারিখ ফিল্টার ==================
function startMainApp() {
    renderItemChips();
    show();
    updateClock();
    if (!clockTimer) clockTimer = setInterval(updateClock, 1000);   // লগইন-লগআউটে টাইমার জমে না
    detectDynamicFlag();
    renderShopName();
    renderReports();
    renderNotices();
    purgeOldLogs();
    updateSyncDot();
}
function updateClock() {
    const nowD = new Date();
    let h = nowD.getHours();
    const m = String(nowD.getMinutes()).padStart(2, '0');
    const s = String(nowD.getSeconds()).padStart(2, '0');
    const ap = h >= 12 ? 'PM' : 'AM';
    h = h % 12; h = h ? h : 12;
    const sh = String(h).padStart(2, '0');
    const wrap = document.getElementById('clockDigits');
    if (wrap) {
        wrap.innerHTML = `
            <div class="digit-box">${sh[0]}</div>
            <div class="digit-box">${sh[1]}</div>
            <div class="colon">:</div>
            <div class="digit-box">${m[0]}</div>
            <div class="digit-box">${m[1]}</div>
            <div class="colon">:</div>
            <div class="digit-box">${s[0]}</div>
            <div class="digit-box">${s[1]}</div>
        `;
    }
    const apEl = document.getElementById('ampmText');
    if (apEl) apEl.innerText = ap;
    const dd = document.getElementById('digitalDate');
    if (dd) {
        const loc = LANG === 'en' ? 'en-GB' : 'bn-BD';
        const html = nowD.toLocaleDateString(loc, { weekday: 'long' }) + '<small>' + nowD.toLocaleDateString(loc, { day: 'numeric', month: 'long', year: 'numeric' }) + '</small>';
        if (dd.__h !== html) { dd.__h = html; dd.innerHTML = html; }
    }
}

async function detectDynamicFlag() {
    const flagEl = document.getElementById('userFlag');
    if (!flagEl) return;
    try {
        const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const data = await res.text();
        const locLine = data.split('\n').find(l => l.startsWith('loc='));
        if (locLine) {
            const cc = locLine.split('=')[1];
            if (cc && cc !== 'XX') { flagEl.innerText = getFlagEmoji(cc); return; }
        }
    } catch(e) {}
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data && data.country_code) { flagEl.innerText = getFlagEmoji(data.country_code); return; }
    } catch(e) {}
}

function renderShopName() {
    const txt = document.getElementById('shopNameText');
    const appShop = document.getElementById('appShopName');
    const n = appData.shop.name;
    if (n) {
        if (txt) txt.innerText = n;
        if (appShop) appShop.innerText = n;
    } else {
        if (txt) txt.innerText = 'দোকানের নাম দিন';
        if (appShop) appShop.innerText = 'দোকানের নাম';
    }
}

// ---- তারিখ ফিল্টার ----
function toggleFilterPanel() {
    const panel = document.getElementById('filterPanel');
    const btn = document.getElementById('filterToggleBtn');
    if (!panel || !btn) return;
    panel.classList.toggle('open');
    btn.classList.toggle('active');
}

function closeFilterOnSearch() {
    const filterPanel = document.getElementById('filterPanel');
    const filterBtn = document.getElementById('filterToggleBtn');
    if (filterPanel && filterPanel.classList.contains('open')) {
        filterPanel.classList.remove('open');
        if (filterBtn) filterBtn.classList.remove('active');
    }
}

function setDateFilter(type, btnEl) {
    dateFilter.type = type;
    dateFilter.value = null;
    document.querySelectorAll('.date-filter-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    document.getElementById('customDateInput').value = '';
    updateFilterInfo();
    filterCustomers();
}
function setCustomDateFilter() {
    const val = document.getElementById('customDateInput').value;
    if (!val) return alert('একটি তারিখ নির্বাচন করুন');
    dateFilter.type = 'custom';
    dateFilter.value = val;
    document.querySelectorAll('.date-filter-btn').forEach(b => b.classList.remove('active'));
    updateFilterInfo();
    filterCustomers();
}
function clearDateFilter() {
    dateFilter.type = 'all';
    dateFilter.value = null;
    document.getElementById('customDateInput').value = '';
    document.querySelectorAll('.date-filter-btn').forEach(b => b.classList.remove('active'));
    const b = document.querySelector('.date-filter-btn[data-dfilter="all"]');
    if (b) b.classList.add('active');
    updateFilterInfo();
    filterCustomers();
}
function updateFilterInfo() {
    const info = document.getElementById('filterActiveInfo');
    if (!info) return;
    if (dateFilter.type === 'all') {
        info.classList.remove('show');
        info.innerText = '';
        return;
    }
    let text = '';
    if (dateFilter.type === 'today') text = '📅 আজকের লেনদেন';
    else if (dateFilter.type === '7') text = '📅 শেষ ৭ দিনের লেনদেন';
    else if (dateFilter.type === '15') text = '📅 শেষ ১৫ দিনের লেনদেন';
    else if (dateFilter.type === '30') text = '📅 শেষ ৩০ দিনের লেনদেন';
    else if (dateFilter.type === 'custom') {
        const d = new Date(dateFilter.value);
        text = '📅 ' + d.toLocaleDateString(LANG === 'en' ? 'en-GB' : 'bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });
    }
    info.innerText = text;
    info.classList.add('show');
}
function dateInFilter(dateStr) {
    if (dateFilter.type === 'all') return true;
    const d = new Date(dateStr);
    d.setHours(0,0,0,0);
    const t = new Date();
    t.setHours(0,0,0,0);
    if (dateFilter.type === 'custom') {
        const cd = new Date(dateFilter.value);
        cd.setHours(0,0,0,0);
        return d.getTime() === cd.getTime();
    }
    if (dateFilter.type === 'today') return d.getTime() === t.getTime();
    const days = parseInt(dateFilter.type);
    return Math.floor((t - d) / (1000 * 60 * 60 * 24)) <= days;
}
function customerMatchesDateFilter(cus) {
    if (dateFilter.type === 'all') return true;
    for (const t of cus.tx) if (dateInFilter(t.dt)) return true;
    for (const p of (cus.payment || [])) if (dateInFilter(p.dt)) return true;
    for (const h of (cus.history || [])) {
        for (const t of (h.tx || [])) if (dateInFilter(t.dt)) return true;
        for (const p of (h.payment || [])) if (dateInFilter(p.dt)) return true;
    }
    return false;
}

// ---- দোকানের তথ্য বদল ----
function requestEditShopName() {
    if (!isOwner()) return alert('🔒 দোকানের তথ্য শুধু মালিক পরিবর্তন করতে পারবেন।');
    document.getElementById('shopEditNameInput').value = appData.shop.name || '';
    document.getElementById('shopEditPhoneInput').value = appData.shop.phone || '';
    document.getElementById('shopEditAddressInput').value = appData.shop.address || '';
    document.getElementById('shopEditPassInput').value = '';
    document.getElementById('shopEditPassInput').type = 'password';
    document.getElementById('shopEditError').style.display = 'none';
    openModal('shopEditModal');
}
function confirmShopNameChange() {
    if (!isOwner()) return;
    const name = document.getElementById('shopEditNameInput').value.trim();
    const phone = document.getElementById('shopEditPhoneInput').value.replace(/[^0-9]/g, '');
    const address = document.getElementById('shopEditAddressInput').value.trim();
    const pass = document.getElementById('shopEditPassInput').value;
    const errEl = document.getElementById('shopEditError');
    const acc = getMyAccount();

    const passErr = guardedVerify('pin', () => verifySecret(pass, acc.passHash));
    if (passErr) {
        errEl.innerText = passErr;
        errEl.style.display = 'block';
        return;
    }
    if (!name || name.length < 2) {
        errEl.innerText = '❌ দোকানের নাম কমপক্ষে ২ অক্ষরের হতে হবে';
        errEl.style.display = 'block';
        return;
    }
    appData.shop.name = name;
    appData.shop.phone = phone;
    appData.shop.address = address;
    save();
    renderShopName();
    filterCustomers();
    closeModal('shopEditModal');
    alert('✅ দোকানের তথ্য সেভ হয়েছে!');
}

// ================== 8. আইটেম ম্যানেজার ==================
// ধরন: carton = সংখ্যা × দাম, free = পরিমাণ + নিজে টাকা, money = শুধু টাকা (স্টক নেই)
// স্টক-সেটিংস (স্টক চালু, একক, কম-সীমা, ডিফল্ট দাম) শুধু মালিক বদলাতে পারেন
const UNIT_PRESETS = ['কার্টুন', 'কেস', 'পিস', 'প্যাকেট', 'বক্স', 'কেজি', 'লিটার'];
function unitSelFill(pre, cur) {
    const sel = document.getElementById(pre + 'UnitSel'), inp = document.getElementById(pre + 'Unit');
    if (!sel) return;
    sel.innerHTML = '<option value="">— বাছুন (ফাঁকা = কার্টুন) —</option>' +
        UNIT_PRESETS.map(u => `<option value="${u}">${u}</option>`).join('') + '<option value="__other">✏️ অন্য (নিজে লিখুন)</option>';
    if (!cur) { sel.value = ''; inp.value = ''; }
    else if (UNIT_PRESETS.includes(cur)) { sel.value = cur; inp.value = cur; }
    else { sel.value = '__other'; inp.value = cur; }
    inp.style.display = sel.value === '__other' ? 'block' : 'none';
}
function unitSelChange(pre) {
    const sel = document.getElementById(pre + 'UnitSel'), inp = document.getElementById(pre + 'Unit');
    if (sel.value === '__other') { inp.value = ''; inp.style.display = 'block'; inp.focus(); }
    else { inp.value = sel.value; inp.style.display = 'none'; }
}
function isBadUnit(u) { return /^[0-9০-৯\s.,]+$/.test(u); }   // একক হলো শব্দ (পিস), সংখ্যা নয়

function toggleItemManager() {
    const im = document.getElementById('itemManager');
    im.classList.toggle('open');
    if (im.classList.contains('open')) renderItemChips();
    syncItemBox();
}
function selectType(type) {
    selectedType = type;
    document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('type-' + type).classList.add('active');
    syncItemBox();
}

// নতুন আইটেমের বক্স: ধরন অনুযায়ী কোন ঘর দেখাবে
function syncItemBox() {
    if (!document.getElementById('newItemUnitSel').options.length) unitSelFill('newItem', '');
    const box = document.getElementById('itemStockBox');
    if (!box) return;
    const chk = document.getElementById('newItemStock');
    box.style.display = (isOwner() && selectedType !== 'money') ? 'block' : 'none';
    document.getElementById('itemRemindBox').style.display = isOwner() ? 'block' : 'none';
    if (selectedType === 'money') chk.checked = false;
    document.getElementById('newItemStockFields').style.display = chk.checked ? 'block' : 'none';
    document.getElementById('newItemRateWrap').style.display = selectedType === 'carton' ? 'block' : 'none';
    document.getElementById('newItemNote').textContent = selectedType === 'carton'
        ? 'দাম দিলে বিক্রির সময় দাম নিজে বসে যাবে।'
        : 'ফ্রি ধরনে মোট টাকা বিক্রির সময় নিজে লিখতে হয়।';
}

function renderItemChips() {
    const box = document.getElementById('itemChips');
    if (!box) return;
    if (appData.itemList.length === 0) {
        box.innerHTML = '<div class="item-empty-msg">কোনো আইটেম নেই।</div>';
        return;
    }
    const owner = isOwner();
    box.innerHTML = '';
    appData.itemList.forEach((item, i) => {
        const t = TYPE_LABEL[item.type] || TYPE_LABEL.money;
        const meta = [];
        if (item.unit && item.type !== 'money') meta.push('একক: ' + escapeHtml(item.unit));
        if (item.stock) meta.push('📦 স্টক চালু');
        if (Calc.num(item.rate) > 0) meta.push('৳' + Calc.num(item.rate));
        if (Calc.num(item.remind) > 0) meta.push('🔔 ' + Calc.num(item.remind) + ' দিন');
        const chip = document.createElement('div');
        chip.className = 'item-chip';
        chip.innerHTML = `
            <div class="chip-info">
                <span class="chip-name">${itemIconOf(item)} ${escapeHtml(item.name)}</span>
                <span class="chip-type ${t.cls}">${t.text}</span>
                ${meta.length ? `<span class="chip-meta">${meta.join(' · ')}</span>` : ''}
            </div>
            ${owner ? `<button class="chip-edit" onclick="openItemEdit(${i})">✏️</button>` : ''}
            <button class="chip-del" onclick="deleteItem(${i})">✕</button>
        `;
        box.appendChild(chip);
    });
}

function addNewItem() {
    const input = document.getElementById('newItemInput');
    const val = input.value.trim();
    if (!val) return alert('আইটেমের নাম লিখুন!');
    if (appData.itemList.some(it => it.name === val)) return alert('❌ এই আইটেম আগে থেকেই আছে!');

    const owner = isOwner();
    const stockOn = owner && selectedType !== 'money' && document.getElementById('newItemStock').checked;
    const unit = document.getElementById('newItemUnit').value.trim();
    const rate = Calc.num(document.getElementById('newItemRate').value);
    const low = Calc.num(document.getElementById('newItemLow').value);
    if (stockOn && !unit) return alert('স্টকের একক লিখুন (যেমন: পিস, প্যাকেট)');
    
    const item = { name: val, type: selectedType };
    const enV = (document.getElementById('newItemEn').value || '').trim().slice(0, 40);
    if (enV) item.en = enV;
    if (ICON_SEL.newItem) item.icon = ICON_SEL.newItem;
    const remind = Math.round(Calc.num(document.getElementById('newItemRemind').value));
    if (owner && remind > 0) item.remind = remind;
    if (owner && selectedType === 'carton' && rate > 0) item.rate = rate;
    if (owner && selectedType !== 'money' && unit) {
        if (isBadUnit(unit)) return alert('একক হলো শব্দ, সংখ্যা নয়।\n\nযেমন: পিস, প্যাকেট, কার্টুন।');
        item.unit = unit;
    }
    if (stockOn) { item.stock = true; if (low > 0) item.low = low; }
    appData.itemList.push(item);
    save();

    input.value = '';
    document.getElementById('newItemEn').value = ''; ICON_SEL.newItem = ''; ICON_AUTO.newItem = true; itemSugShow('newItem'); iconRender('newItem'); { const h = document.getElementById('newItemIconHint'); if (h) h.textContent = ''; }
    ['newItemRate', 'newItemLow', 'newItemRemind'].forEach(id => { document.getElementById(id).value = ''; });
    unitSelFill('newItem', '');
    document.getElementById('newItemStock').checked = false;
    syncItemBox();
    renderItemChips();
    refreshAllProductDropdowns();
    updateLowBadge();
    alert(`✅ "${val}" যোগ হয়েছে`);
}

// স্টক-আইটেম ডিলিট করলে হিসাব এলোমেলো হয়, তাই আগে স্টক বন্ধ করতে হয়
function deleteItem(i) {
    const item = appData.itemList[i];
    if (!item) return;
    if (item.stock) {
        if (!isOwner()) return showEmployeeLockedMsg();
        return alert('📦 এই আইটেমের স্টক চালু আছে।\n\nআগে ✏️ চেপে স্টক বন্ধ করুন, তারপর ডিলিট করুন।');
    }
    showConfirmDelete(`"${item.name}" আইটেমটি ডিলিট করবেন?`, function() {
        appData.itemList.splice(i, 1);
        save();
        renderItemChips();
        refreshAllProductDropdowns();
    });
}

// ---- বিদ্যমান আইটেমের স্টক-সেটিংস (✏️) ----
function openItemEdit(i) {
    if (!isOwner()) return showEmployeeLockedMsg();
    const it = appData.itemList[i];
    if (!it) return;
    editingItemIdx = i;
    document.getElementById('itemEditTitle').textContent = '✏️ ' + it.name;
    document.getElementById('editItemStock').checked = !!it.stock;
    unitSelFill('editItem', it.unit || '');
    document.getElementById('editItemLow').value = it.low || '';
    document.getElementById('editItemRate').value = it.rate || '';
    document.getElementById('editItemRemind').value = it.remind || '';
    document.getElementById('editItemSupName').value = it.supName || '';
    document.getElementById('editItemSupPrice').value = it.supPrice || '';
    document.getElementById('editItemSupRange').value = (it.supRange === undefined || it.supRange === null) ? '' : it.supRange;
    document.getElementById('editItemSupFrom').value = todayLocal();
    document.getElementById('editItemSupHist').textContent = (it.supHist && it.supHist.length > 1) ? '🕘 ' + (LANG === 'en' ? 'Price history: ' : 'দামের ইতিহাস: ') + it.supHist.map(x => (x.from || (LANG === 'en' ? 'start' : 'শুরু')) + ' → ' + x.price).join(' | ') : '';
    document.getElementById('editItemEn').value = it.en || '';
    { const nmEl = document.getElementById('editItemName'); const em = (it.name.match(/[\p{Extended_Pictographic}]/u) || [''])[0]; const clean = it.name.replace(EMOJI_EDGE, '').trim();
      nmEl.value = (!it.icon && em && clean) ? clean : it.name; }
    ICON_SEL.editItem = it.icon || ((it.name.replace(EMOJI_EDGE, '').trim() && it.name !== it.name.replace(EMOJI_EDGE, '').trim()) ? (it.name.match(/[\p{Extended_Pictographic}]/u) || [''])[0] : ''); ICON_AUTO.editItem = false; iconRender('editItem'); { const h = document.getElementById('editItemIconHint'); if (h) h.textContent = ''; }
    itemSugShow('editItem');
    document.getElementById('editItemError').style.display = 'none';
    syncItemEdit();
    openModal('itemEditModal');
}
function syncItemEdit() {
    const it = appData.itemList[editingItemIdx];
    if (!it) return;
    document.getElementById('editStockWrap').style.display = it.type === 'money' ? 'none' : 'block';
    document.getElementById('editItemStockFields').style.display = document.getElementById('editItemStock').checked ? 'block' : 'none';
    document.getElementById('editItemRateWrap').style.display = it.type === 'carton' ? 'block' : 'none';
    document.getElementById('editItemNote').textContent = it.type === 'carton'
        ? 'স্টক বন্ধ করলে আগের হিসাব মুছবে না, আবার চালু করলে ফিরে আসবে।'
        : 'স্টক বন্ধ করলে আগের হিসাব মুছবে না।';
}

// ---------- ✏️ আইটেমের নাম বদল: সব জায়গার পুরনো নাম নতুন নামে ----------
const EMOJI_EDGE = /^[\p{Extended_Pictographic}\uFE0F\u200D\s]+|[\p{Extended_Pictographic}\uFE0F\u200D\s]+$/gu;
function itemRenameAll(oldN, newN) {
    const seen = new Set();
    (function walk(o) {
        if (!o || typeof o !== 'object' || seen.has(o)) return;
        seen.add(o);
        if (Array.isArray(o)) { o.forEach(walk); return; }
        Object.keys(o).forEach(k => {
            if ((k === 'tp' || k === 'item') && o[k] === oldN) o[k] = newN;
            else if (o[k] && typeof o[k] === 'object') walk(o[k]);
        });
    })(appData);
    (appData.customers || []).forEach(c => {
        if (c.snooze && Object.prototype.hasOwnProperty.call(c.snooze, oldN)) { c.snooze[newN] = c.snooze[oldN]; delete c.snooze[oldN]; }
    });
    const it = appData.itemList.find(x => x.name === oldN); if (it) it.name = newN;
}
function saveItemEdit() {
    if (!isOwner()) return;
    const it = appData.itemList[editingItemIdx];
    if (!it) return;
    const err = document.getElementById('editItemError');
    const showErr = m => { err.textContent = m; err.style.display = 'block'; };
    const on = it.type !== 'money' && document.getElementById('editItemStock').checked;
    const unit = document.getElementById('editItemUnit').value.trim();
    const remind = Math.round(Calc.num(document.getElementById('editItemRemind').value));
    if (on && !unit) return showErr('❌ স্টকের একক লিখুন (যেমন: পিস, প্যাকেট)');
    if (unit && isBadUnit(unit)) return showErr('❌ একক হলো শব্দ, সংখ্যা নয় (যেমন: পিস, প্যাকেট, কার্টুন)');
    const low = Calc.num(document.getElementById('editItemLow').value);
    const rate = Calc.num(document.getElementById('editItemRate').value);
    const newName = (document.getElementById('editItemName').value || '').trim().slice(0, 40);
    if (!newName) return showErr('❌ নাম লিখুন');
    if (newName !== it.name && appData.itemList.some(x => x !== it && x.name === newName)) return showErr('❌ এই নামে আরেকটা আইটেম আছে');
    if (newName !== it.name) itemRenameAll(it.name, newName);
    const enE = (document.getElementById('editItemEn').value || '').trim().slice(0, 40);
    if (enE) it.en = enE; else delete it.en;
    if (ICON_SEL.editItem) it.icon = ICON_SEL.editItem; else delete it.icon;
    if (remind > 0) it.remind = remind; else delete it.remind;
    it.stock = on;
    if (it.type !== 'money') { if (unit) it.unit = unit; else delete it.unit; }
    if (on) { if (low > 0) it.low = low; else delete it.low; }
    const supName = document.getElementById('editItemSupName').value.trim().slice(0, 30), supPrice = Calc.num(document.getElementById('editItemSupPrice').value);
    if (on && (supPrice > 0 || supName)) {
        it.supName = supName || 'সরবরাহকারী';
        if (supPrice > 0) {
            const oldP = Calc.num(it.supPrice);
            if (oldP > 0 && supPrice !== oldP) {   // দাম বদল: আগের দাম তারিখসহ জমা থাকে
                const from = document.getElementById('editItemSupFrom').value || todayLocal();
                if (!it.supHist || !it.supHist.length) it.supHist = [{ from: '', price: oldP }];
                it.supHist = it.supHist.filter(x => x.from !== from);
                it.supHist.push({ from, price: supPrice });
                it.supHist.sort((a, b) => (a.from || '') < (b.from || '') ? -1 : 1);
            }
            it.supPrice = supPrice;
        } else { delete it.supPrice; delete it.supHist; }
    } else { delete it.supPrice; delete it.supName; delete it.supHist; }
    { const rg = (document.getElementById('editItemSupRange').value || '').trim(); const rn = parseFloat(rg);
      if (it.supName && rg !== '' && !isNaN(rn) && rn >= 0) it.supRange = rn; else delete it.supRange; }
    if (it.type === 'carton') { if (rate > 0) it.rate = rate; else delete it.rate; }
    save();
    closeModal('itemEditModal');
    renderItemChips();
    refreshAllProductDropdowns();
    filterCustomers();
    updateLowBadge();
    updateRemindBar();
    if (LANG === 'en') applyLang();
}
function refreshAllProductDropdowns() {
    document.querySelectorAll('select[id^="tp-"]').forEach(sel => {
        const cur = sel.value;
        sel.innerHTML = '';
        appData.itemList.forEach(it => {
            const o = document.createElement('option');
            o.value = it.name; o.textContent = it.name;
            sel.appendChild(o);
        });
        if ([...sel.options].some(o => o.value === cur)) sel.value = cur;
        const idx = sel.id.replace('tp-', '');
        onProductChange(idx);
    });
}

// ================== 9. কাস্টমার কার্ড ==================
function onAddCustomer(e) {
    e.preventDefault();
    appData.customers.push({
        id: uid(),
        name: document.getElementById('cName').value.trim(),
        phone: document.getElementById('cPhone').value.replace(/[^0-9]/g, ''),
        tx: [],
        payment: [],
        photo: null,
        history: [],
        note: '',
        createdBy: currentUser.name,
        createdByRole: currentUser.role,
        createdAt: now()
    });
    save();
    this.reset();
    show();
    renderReports();
    switchPage('home');
    alert('✅ কাস্টমার যোগ হয়েছে!');
}

// ---------- রেন্ডার ----------
// WhatsApp বার্তা: নগদ বিক্রি আলাদা দেখানো হয়, বাকির হিসাবে ধরা হয় না
function buildWaMessage(cus, totals) { return docGen(() => buildWaMessage0(cus, totals)); }
function buildWaMessage0(cus, totals) {
    let bakiLines = '', cashLines = '', payLines = '';
    cus.tx.forEach(t => {
        const line = `\n- ${t.dt}: ${txLabel(t).text} = ${t.amt} টাকা`;
        if (Calc.isCash(t)) cashLines += line; else bakiLines += line;
    });
    (cus.payment || []).forEach(p => { payLines += `\n- ${p.dt}: জমা ${p.amt} টাকা`; });
    const billWord = cashLines ? 'বাকি বিল' : 'বিল';
    const shopLine = appData.shop.name ? `🏪 ${appData.shop.name}\n` : '';
    let msg = `${shopLine}\nপ্রিয় ${cus.name},\nআপনার হিসাব:\n\n📋 ${billWord}:${bakiLines || '\n- নেই'}\n\n`;
    if (cashLines) msg += `💵 নগদ বিক্রি (পরিশোধিত, বাকিতে ধরা হয়নি):${cashLines}\n\n`;
    msg += `💵 জমা:${payLines || '\n- নেই'}\n\n🔹 মোট ${billWord}: ${totals.bill} টাকা\n🔹 মোট জমা: ${totals.paid} টাকা\n🔹 বাকি: ${totals.due} টাকা।`;
    return msg;
}

function customerCardHtml(cus, idx) {
    const totals = getCustomerTotals(cus);
    const owner = isOwner();
    const isPaidFull = totals.bill > 0 && totals.due <= 0;
    const hasLive = cus.tx.length > 0 || (cus.payment && cus.payment.length > 0);
    const historyCount = (cus.history || []).length;
    const hasNote = cus.note && cus.note.trim().length > 0;

    let rows = '';
    cus.tx.forEach((t, tIdx) => {
        const lb = txLabel(t);
        const cash = Calc.isCash(t);
        const byTag = t.byName ? `<span class="by-tag">👤 ${escapeHtml(t.byName)}</span>` : '';
        const payTag = cash ? '<span class="by-tag cash-tag">💵 নগদ</span>' : '<span class="by-tag baki-tag">📒 বাকি</span>';
        const editLine = t.editedByName
            ? `<span class="edit-note">✏️ ${escapeHtml(t.editedByName)} পরিবর্তন: ${escapeHtml(t.oldAmt)}→${escapeHtml(t.amt)} ৳</span>` : '';
        rows += `<tr${cash ? ' class="cash-row"' : ''}>
            <td>${escapeHtml(t.dt)}</td>
            <td>${lb.icon} ${escapeHtml(lb.text)} ${byTag}${payTag}${editLine}</td>
            <td>${escapeHtml(t.amt)} ৳
                <button class="action-btn" onclick="editTx(${idx}, ${tIdx})">✏️</button>
                <button class="action-btn" onclick="delTx(${idx}, ${tIdx})">❌</button>
            </td>
        </tr>`;
    });

    let payRows = '';
    (cus.payment || []).forEach((p, pIdx) => {
        const byTag = p.byName ? `<span class="by-tag">👤 ${escapeHtml(p.byName)}</span>` : '';
        payRows += `<tr class="pay-row">
            <td>${escapeHtml(p.dt)}</td>
            <td>💵 জমা ${byTag}</td>
            <td>${escapeHtml(p.amt)} ৳ <button class="action-btn" onclick="delPayment(${idx}, ${pIdx})">❌</button></td>
        </tr>`;
    });

    const optionsHtml = appData.itemList.map(it => `<option value="${escapeHtml(it.name)}">${escapeHtml(it.name)}</option>`).join('');

    const photoInner = cus.photo
        ? `<img src="${cus.photo}" onclick="viewPhoto(${idx})">`
        : `<span onclick="openPhotoUpload(${idx})">${escapeHtml(getInitial(cus.name))}</span>`;
    const photoMenu = cus.photo ? `
        <div class="photo-menu" id="photo-menu-${idx}">
            <div class="photo-menu-item" onclick="openPhotoUpload(${idx})"><span class="pm-icon change">📷</span> পরিবর্তন</div>
            <div class="photo-menu-item danger" onclick="removePhoto(${idx})"><span class="pm-icon delete">🗑️</span> ডিলিট</div>
        </div>` : '';
    const cameraClick = cus.photo ? `onclick="togglePhotoMenu(event, ${idx})"` : `onclick="openPhotoUpload(${idx})"`;

    const historyBtnHtml = historyCount > 0 ? `
        <button class="history-btn" onclick="toggleHistory(${idx})">📁 হিস্টোরি <span class="hist-count">${historyCount}</span></button>
        <div class="history-section" id="history-section-${idx}">
            <div class="history-filter-row">
                <button class="history-filter-btn active" data-filter="all" onclick="setHistoryFilter(${idx}, 'all')">সব</button>
                <button class="history-filter-btn" data-filter="7" onclick="setHistoryFilter(${idx}, '7')">৭ দিন</button>
                <button class="history-filter-btn" data-filter="15" onclick="setHistoryFilter(${idx}, '15')">১৫ দিন</button>
                <button class="history-filter-btn" data-filter="30" onclick="setHistoryFilter(${idx}, '30')">৩০ দিন</button>
            </div>
            <div id="history-content-${idx}"></div>
        </div>` : '';

    const noteDisplayHtml = (owner && hasNote) ? `
        <div class="customer-note-display">
            <div class="note-label">📝 নোট (শুধু মালিক)</div>
            <div class="note-text">${noteWithNumbers(cus.note)}</div>
        </div>` : '';

    const emptyTable = `
        <div class="cc-table-wrap">
            <table class="cc-table">
                <thead><tr><th>তারিখ</th><th>বিবরণ</th><th>টাকা</th></tr></thead>
                <tbody><tr><td colspan="3" style="text-align:center; color:#94a3b8;">কোনো বিল নেই</td></tr></tbody>
            </table>
        </div>`;
    const liveTableHtml = hasLive ? `
        <div class="cc-table-wrap">
            <table class="cc-table">
                <thead><tr><th>তারিখ</th><th>বিবরণ <button type="button" class="calc-open" onclick="openCalc()" title="ক্যালকুলেটর">${ICON_CALC}</button></th><th>টাকা</th></tr></thead>
                <tbody>${rows}${payRows}</tbody>
            </table>
        </div>` : (historyCount > 0
            ? `<div style="text-align:center; color:#10b981; font-size:12px; padding:12px; background:#f0fdf4; border-radius:10px; margin-bottom:10px;">✅ সব পরিশোধিত</div>`
            : emptyTable);

    const noteBtnHtml = owner ? `<button class="cc-action-btn note ${hasNote ? 'has-note' : ''}" onclick="openNoteModal(${idx})">📝 নোট ${hasNote ? `<span class="note-badge">আছে</span>` : ''}</button>` : '';
    const addedValid = cus.createdAt && !isNaN(new Date(cus.createdAt));
    const addedByHtml = (owner && cus.createdBy)
        ? `<div class="cc-added">➕ যোগ করেছেন: <b>${escapeHtml(cus.createdBy)}</b>${cus.createdByRole === 'employee' ? ' (স্টাফ)' : ''}${addedValid ? ' · ' + formatDateBn(cus.createdAt) : ''}</div>` : '';
    const deleteBtnHtml = owner ? `<button class="cc-delete" onclick="delC(${idx})">ডিলিট</button>` : '';

    return `
        <div class="customer-card ${isPaidFull ? 'paid-card' : ''}">
            <div class="cc-header">
                <div class="cc-avatar-wrap">
                    <div class="cc-avatar">${photoInner}</div>
                    <button class="cc-photo-btn" ${cameraClick}>📷</button>
                    ${photoMenu}
                </div>
                <div class="cc-info">
                    <h3 class="cc-name">${escapeHtml(cus.name)} ${isPaidFull ? '<span class="paid-badge">✅ পরিশোধিত</span>' : ''}</h3>
                    <div class="cc-phone"><a class="call-btn" href="${telHref(cus.phone)}" title="কল করুন" aria-label="কল করুন">📞</a> ${escapeHtml(cus.phone)} <button onclick="editP(${idx})">পরিবর্তন</button>${owner ? ` <button class="rc-btn" onclick="rechargeGo('${escapeHtml(cus.phone).replace(/'/g, '')}')">📲 রিচার্জ</button>` : ''}</div>
                </div>
                ${deleteBtnHtml}
            </div>

            <div class="${owner ? 'cc-action-row' : 'cc-action-row single'}">
                <button class="cc-action-btn print" onclick="pdfCustomer(${idx})">📄 PDF</button>
                ${noteBtnHtml}
            </div>

            ${addedByHtml}
            ${noteDisplayHtml}
            ${liveTableHtml}
            ${deleteNoteHtml(cus)}

            <div class="cc-summary">
                <div class="cc-summary-row"><span>📋 মোট বিল:</span><span><b>${totals.bill} টাকা</b></span></div>
                <div class="cc-summary-row"><span>💵 মোট জমা:</span><span style="color:#16a34a;"><b>${totals.paid} টাকা</b></span></div>
                <div class="cc-summary-row total ${isPaidFull ? 'paid-full' : 'due'}">
                    <span>${isPaidFull ? '✅ পরিশোধিত:' : '🔴 বাকি:'}</span>
                    <span>${Math.max(0, totals.due)} টাকা</span>
                </div>
            </div>

            <button class="cc-pay-btn" onclick="openPaymentModal(${idx})">💰 টাকা জমা নিন</button>
            <button class="cc-toggle-btn" onclick="toggleAddBox(event, ${idx})">➕ আজকে কী নিলো যোগ করুন</button>

            <div class="add-box" id="add-box-${idx}" onclick="event.stopPropagation()">
                <select id="tp-${idx}" onchange="onProductChange(${idx})">${optionsHtml}</select>
                <div class="row-inputs">
                    <input type="number" id="qty-${idx}" inputmode="numeric" placeholder="পরিমাণ" style="display:none;" oninput="autoCalculate(${idx})">
                    <input type="number" id="rate-${idx}" inputmode="numeric" placeholder="দাম/পিস" style="display:none;" oninput="autoCalculate(${idx})">
                    <input type="number" id="amt-${idx}" inputmode="numeric" placeholder="মোট টাকা">
                </div>
                <input type="date" id="dt-${idx}" value="${todayLocal()}">
                <div class="stk-hint" id="stk-${idx}" style="display:none"></div>
                <div class="paytype-row" data-pt="baki">
                    <button type="button" class="pt-btn active" data-v="baki" onclick="setPayType(this, 'baki')">📒 বাকি</button>
                    <button type="button" class="pt-btn" data-v="cash" onclick="setPayType(this, 'cash')">💵 নগদ</button>
                </div>
                <button class="btn-primary" onclick="addT(${idx})">সেভ করুন</button>
            </div>

            ${historyBtnHtml}
            <a href="javascript:void(0)" onclick="waAskCard(${idx})" class="wa-btn">💬 WhatsApp</a>
        </div>`;
}

function show(dataToRender) {
    if (!dataToRender) dataToRender = appData.customers;
    dataToRender = sortByRecent(dataToRender);
    if (SEARCH_PIN) { const k = dataToRender.findIndex(c => c.id === SEARCH_PIN); if (k > 0) dataToRender.unshift(dataToRender.splice(k, 1)[0]); }
    const container = document.getElementById('list');
    if (!container) return;
    updateCount(dataToRender.length);
    updateTopStats();
    updateLowBadge();
    updateRemindBar();

    if (dataToRender.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#64748b; padding:20px; background:#fff; border-radius:14px;">কোনো কাস্টমার নেই</p>';
        return;
    }
    container.innerHTML = dataToRender.map(cus => customerCardHtml(cus, appData.customers.indexOf(cus))).join('');
    dataToRender.forEach(cus => onProductChange(appData.customers.indexOf(cus)));
}

// ---------- "আজকে কী নিলো" ফর্ম ----------
// আইটেম বদলালে: ঘর দেখানো/লুকানো, ডিফল্ট দাম, একক, স্টক হিন্ট
function onProductChange(idx) {
    const sel = document.getElementById(`tp-${idx}`);
    if (!sel) return;
    const itInfo = getItemByName(sel.value);
    const item = itemOf(sel.value);
    const unit = item && item.unit;
    const q = document.getElementById(`qty-${idx}`);
    const r = document.getElementById(`rate-${idx}`);
    const a = document.getElementById(`amt-${idx}`);
    q.style.display = 'none'; r.style.display = 'none';
    q.value = ''; r.value = ''; a.value = '';

    if (itInfo.type === 'carton') {
        q.style.display = 'block'; q.placeholder = unit ? unit + ' সংখ্যা' : 'কার্টুন সংখ্যা';
        r.style.display = 'block'; r.placeholder = unit ? 'দাম/' + unit : 'দাম/পিস';
        if (Calc.num(item && item.rate) > 0) r.value = item.rate;
        a.readOnly = true; a.style.background = '#f1f5f9';
    } else if (itInfo.type === 'free') {
        q.style.display = 'block'; q.placeholder = unit ? unit + ' সংখ্যা' : 'পরিমাণ';
        a.readOnly = false; a.style.background = '#fff';
    } else {
        a.readOnly = false; a.style.background = '#fff';
    }

    // স্টক হিন্ট: "📦 স্টকে আছে: ১৯ পিস"
    const h = document.getElementById(`stk-${idx}`);
    if (h) {
        if (item && item.stock) {
            const s = Calc.stockInfo(appData, item.name);
            const lv = Calc.stockLevel(item, s);
            h.style.display = 'block';
            h.classList.toggle('low', lv !== 'ok');
            h.innerHTML = '📦 স্টকে আছে: <b>' + s.remaining + '</b> ' + escapeHtml(item.unit || '') + (lv === 'out' ? ' — শেষ!' : lv === 'low' ? ' — কম আছে' : '');
        } else {
            h.style.display = 'none';
        }
    }

    const box = document.getElementById(`add-box-${idx}`);
    if (box && box.style.display === 'block') setTimeout(() => revealBox(box), 40);
}

function autoCalculate(idx) {
    const sel = document.getElementById(`tp-${idx}`);
    if (!sel) return;
    if (getItemByName(sel.value).type === 'carton') {
        const q = parseFloat(document.getElementById(`qty-${idx}`).value) || 0;
        const r = parseFloat(document.getElementById(`rate-${idx}`).value) || 0;
        document.getElementById(`amt-${idx}`).value = (q && r) ? q * r : '';
    }
}

// ফর্ম খুললে নিচের মেনুর নিচে ঢাকা পড়ে থাকত — এখন নিজে স্ক্রল করে পুরোটা দেখায়
function revealBox(box) {
    const nav = document.querySelector('.bottom-nav');
    const bar = document.querySelector('.app-bar');
    const navShown = nav && getComputedStyle(nav).display !== 'none';
    const vvh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const limit = (navShown ? nav.getBoundingClientRect().top : vvh) - 12;
    const headBottom = bar ? bar.getBoundingClientRect().bottom + 8 : 8;
    const r = box.getBoundingClientRect();
    const overflow = r.bottom - limit;
    if (overflow <= 0) return;
    const delta = Math.min(overflow, Math.max(0, r.top - headBottom));
    if (delta > 0) window.scrollBy({ top: delta, behavior: 'smooth' });
}

function toggleAddBox(e, idx) {
    e.stopPropagation();
    const box = document.getElementById(`add-box-${idx}`);
    const vis = box.style.display === 'block';
    document.querySelectorAll('.add-box').forEach(b => b.style.display = 'none');
    if (!vis) { box.style.display = 'block'; onProductChange(idx); }
}

// নগদ / বাকি বাটন
function setPayType(btn, v) {
    const row = btn.parentNode;
    row.setAttribute('data-pt', v);
    row.querySelectorAll('.pt-btn').forEach(b => b.classList.toggle('active', b === btn));
}

function addT(idx) {
    const sel = document.getElementById(`tp-${idx}`);
    if (!sel) return;
    const itemName = sel.value;
    const itInfo = getItemByName(itemName);
    const amt = document.getElementById(`amt-${idx}`).value;
    const qty = document.getElementById(`qty-${idx}`).value;
    const dtVal = document.getElementById(`dt-${idx}`).value;
    const ptRow = document.querySelector(`#add-box-${idx} .paytype-row`);
    const payType = (ptRow && ptRow.getAttribute('data-pt') === 'cash') ? 'cash' : 'baki';

    if (!amt || amt <= 0) return alert('সঠিক টাকা লিখুন');
    const stockItem = itemOf(itemName);
    const isStock = !!(stockItem && stockItem.stock);
    if ((itInfo.type === 'carton' || isStock) && (!qty || qty <= 0)) return alert('পরিমাণ লিখুন');

    if (isStock) {
        const s = Calc.stockInfo(appData, itemName);
        const q = Calc.num(qty);
        const u = stockItem.unit || '';
        if (q > s.remaining && !confirm(`⚠️ ${itemName} স্টকে আছে ${s.remaining} ${u}, আপনি ${q} ${u} দিচ্ছেন।\n\nতবুও সেভ করবেন?`)) return;
    }

    requestTransactionPin(
        '🔐 বিক্রি এন্ট্রি নিশ্চিত করুন',
        `👤 ${appData.customers[idx].name} — ${itemName} — ${amt} ৳ — ${payType === 'cash' ? '💵 নগদ' : '📒 বাকি'}`,
        function() {
            appData.customers[idx].tx.push({
                id: uid(),
                dt: dtVal,
                tp: itemName,
                qty: (itInfo.type === 'carton' || itInfo.type === 'free') ? qty : null,
                amt: amt,
                pay: payType,
                byName: currentUser.name,
                byRole: currentUser.role,
                byId: currentUser.id,
                at: now(),
                editedByName: null,
                editedAt: null,
                oldAmt: null,
                oldTp: null
            });
            const _cus = appData.customers[idx], _t = _cus.tx[_cus.tx.length - 1];
            const _tot = getCustomerTotals(_cus);
            save();
            filterCustomers();
            renderReports();
            updateLowBadge();
            waAskAfterEntry(_cus, () => waEntryMessage(_cus, 'tx', _t, _tot));
        }
    );
}
// ---------- এডিট ----------
function editTx(cusIdx, txIdx) {
    requestTransactionPin(
        '🔐 হিসাব এডিট করতে পাসওয়ার্ড দিন',
        'সঠিক পাসওয়ার্ড দিলে এডিট স্ক্রিন আসবে',
        function() {
            currentEditCusIdx = cusIdx;
            currentEditTxIdx = txIdx;
            const t = appData.customers[cusIdx].tx[txIdx];
            document.getElementById('editTpInput').value = t.tp;
            document.getElementById('editAmtInput').value = t.amt;
            const badge = document.getElementById('editInfoBadge');
            badge.innerHTML = `আগের: <b>${escapeHtml(t.tp)}</b> — <b>${t.amt} ৳</b><br>এন্ট্রি করেছিলেন: <b>${escapeHtml(t.byName || '—')}</b>`;
            badge.classList.add('show');
            openModal('editTxModal');
        }
    );
}

function saveEditTx() {
    const newTp = document.getElementById('editTpInput').value.trim();
    const newAmt = document.getElementById('editAmtInput').value;
    if (!newTp || !newAmt || newAmt <= 0) return alert('সঠিক তথ্য দিন');

    const t = appData.customers[currentEditCusIdx].tx[currentEditTxIdx];
    t.oldTp = t.tp;
    t.oldAmt = t.amt;
    t.tp = newTp;
    t.amt = newAmt;
    t.editedByName = currentUser.name;
    t.editedByRole = currentUser.role;
    t.editedAt = now();
    save();
    closeModal('editTxModal');
    filterCustomers();
    renderReports();
}

// ---------- জমা ----------
function openPaymentModal(cusIdx) {
    currentPayCusIdx = cusIdx;
    const totals = getCustomerTotals(appData.customers[cusIdx]);
    document.getElementById('payInfo').innerHTML = 
        `👤 <b>${escapeHtml(appData.customers[cusIdx].name)}</b><br>` +
        `মোট বিল: <b>${totals.bill} টাকা</b> | জমা: <b>${totals.paid} টাকা</b><br>` +
        `বর্তমান বাকি: <b style="color:#dc2626;">${totals.due} টাকা</b>`;
    const p = document.getElementById('payAmountInput');
    p.value = totals.due > 0 ? totals.due : '';
    document.getElementById('payDateInput').value = todayLocal();
    const collected = document.getElementById('collectedByInfo');
    collected.innerText = '👤 টাকা নিচ্ছেন: ' + currentUser.name + (isOwner() ? ' (মালিক)' : ' (স্টাফ)');
    collected.classList.add('show');
    openModal('paymentModal');
    setTimeout(() => p.focus(), 200);
}
// কাস্টমারের কোনো আইটেমের বাকি কত (বাকির মোট − এই আইটেমে ভাগ করে দেওয়া পেমেন্ট)
function itemBakiOut(c, name) {
    let total = 0, alloc = 0;
    (c.tx || []).forEach(t => { if (t && t.tp === name && !Calc.isCash(t)) total += Calc.num(t.amt); });
    (c.payment || []).forEach(p => (p.alloc || []).forEach(a => { if (a.item === name) alloc += Calc.num(a.amt); }));
    return Math.max(0, Calc.r2(total - alloc));
}
// রেঞ্জ সেট করা আইটেমগুলোর মধ্যে যেগুলো এই টাকার সাথে মেলে
function paySuggest(c, amt) {
    const names = []; (c.tx || []).forEach(t => { if (t && t.tp && !Calc.isCash(t) && !names.includes(t.tp)) names.push(t.tp); });
    const out = [];
    names.forEach(n => {
        const it = itemOf(n); if (!it || it.supRange === undefined || it.supRange === null) return;
        const o = itemBakiOut(c, n); if (!(o > 0)) return;
        const rg = Calc.num(it.supRange), rate = Calc.num(it.rate);
        const cands = [o]; if (rate > 0 && rate < o) cands.push(rate);
        const m = cands.find(x => amt >= x && amt <= x + rg);
        if (m !== undefined) out.push({ name: n, sup: it.supName || '', out: o, alloc: Calc.r2(m) });
    });
    return out;
}
let PAY_PEND = null;
function savePayment() {
    const rawVal = document.getElementById('payAmountInput').value.trim().toLowerCase();
    const dt = document.getElementById('payDateInput').value;
    if (!dt) return alert('তারিখ নির্বাচন করুন');
    let amt = 0;
    if (rawVal === 'p') {
        const totals = getCustomerTotals(appData.customers[currentPayCusIdx]);
        if (totals.due <= 0) return alert('❌ এই কাস্টমারের কোনো বাকি নেই!');
        amt = totals.due;
    } else {
        amt = parseFloat(rawVal);
        if (!amt || amt <= 0 || isNaN(amt)) return alert('সঠিক পরিমাণ লিখুন');
    }
    const cus = appData.customers[currentPayCusIdx], tot = getCustomerTotals(cus);
    closeModal('paymentModal');
    // পুরো বাকি মিটলে প্রশ্ন নেই; কম দিলে এবং সাজেশন মিললে প্রশ্ন
    const sug = amt < tot.due ? paySuggest(cus, amt) : [];
    if (sug.length) {
        PAY_PEND = { idx: currentPayCusIdx, amt, dt, sug, sel: sug.length === 1 ? [0] : [] };
        setTimeout(payAllocRender, 250);
        return;
    }
    setTimeout(() => payFinish(currentPayCusIdx, amt, dt, []), 250);
}
function payAllocRender() {
    const P = PAY_PEND; if (!P) return;
    const c = appData.customers[P.idx];
    document.getElementById('payAllocTitle').textContent = '💰 ' + P.amt + ' ৳ কোন আইটেমের পেমেন্ট?';
    document.getElementById('payAllocWho').textContent = '👤 ' + c.name + ' — যা বাকি আছে:';
    document.getElementById('payAllocList').innerHTML = P.sug.map((x, i) => {
        const it = itemOf(x.name), on = P.sel.includes(i);
        return '<div class="pa-it' + (on ? ' on' : '') + '" onclick="payAllocTick(' + i + ')"><span class="pa-ck">' + (on ? '✓' : '') + '</span><span>' + itemIconOf(it) + ' ' + escapeHtml(x.name) + (x.sup ? ' <small>(' + escapeHtml(x.sup) + ')</small>' : '') + '</span><b>' + x.alloc + ' ৳</b></div>';
    }).join('');
    const used = P.sel.reduce((a, i) => a + P.sug[i].alloc, 0);
    document.getElementById('payAllocSum').innerHTML = P.sel.length
        ? '<div>✅ আইটেমের পেমেন্ট: ' + Calc.r2(used) + ' ৳</div><div>➕ বাকি ' + Calc.r2(P.amt - used) + ' ৳ → সাধারণ জমা (মোট বাকি থেকে কাটবে)</div>'
        : 'কিছু বাছা হয়নি — পুরোটাই সাধারণ জমা হিসেবে যাবে';
    openModal('payAllocModal');
}
function payAllocTick(i) {
    const P = PAY_PEND; if (!P) return;
    const k = P.sel.indexOf(i);
    if (k >= 0) P.sel.splice(k, 1);
    else {
        const used = P.sel.reduce((a, j) => a + P.sug[j].alloc, 0);
        if (used + P.sug[i].alloc > P.amt + 0.001) return alert('❌ টাকা কম পড়ছে — আগে অন্যটা বাদ দিন');
        P.sel.push(i);
    }
    payAllocRender();
}
function payAllocConfirm() {
    const P = PAY_PEND; if (!P) return; PAY_PEND = null;
    closeModal('payAllocModal');
    setTimeout(() => payFinish(P.idx, P.amt, P.dt, P.sel.map(i => ({ item: P.sug[i].name, amt: P.sug[i].alloc }))), 250);
}
function payAllocSkip() {
    const P = PAY_PEND; if (!P) return; PAY_PEND = null;
    closeModal('payAllocModal');
    setTimeout(() => payFinish(P.idx, P.amt, P.dt, []), 250);
}
function payFinish(payCusIdx, amt, dt, alloc) {
    const cusName = appData.customers[payCusIdx].name;
    // তারপর পাসওয়ার্ড চাই
    setTimeout(function() {
        requestTransactionPin(
            '🔐 টাকা জমা নিশ্চিত করুন',
            `👤 ${cusName} — জমা ${amt} ৳`,
            function() {
                if (!Array.isArray(appData.customers[payCusIdx].payment)) appData.customers[payCusIdx].payment = [];
                const rec = {
                    id: uid(),
                    dt: dt,
                    amt: amt,
                    byName: currentUser.name,
                    byRole: currentUser.role,
                    byId: currentUser.id,
                    at: now()
                };
                if (alloc && alloc.length) rec.alloc = alloc;
                appData.customers[payCusIdx].payment.push(rec);
                const _pc = appData.customers[payCusIdx];
                const _pLast = _pc.payment[_pc.payment.length - 1], _pTot = getCustomerTotals(_pc);
                const _pm = () => waEntryMessage(_pc, 'pay', _pLast, _pTot);
                archiveIfFullyPaid(_pc);
                save();
                filterCustomers();
                renderReports();
                waAskAfterEntry(_pc, _pm);
            }
        );
    }, 50);
}

function markGone(c, ids) {
    c.gone = (c.gone || []).concat(ids.filter(Boolean)).slice(-600);
}
function archiveIfFullyPaid(cus) {
    const totals = getCustomerTotals(cus);
    if (totals.bill > 0 && totals.due <= 0 && (cus.tx.length > 0 || cus.payment.length > 0)) {
        if (!Array.isArray(cus.history)) cus.history = [];
        cus.history.push({
            archivedAt: now(),
            tx: JSON.parse(JSON.stringify(cus.tx)),
            payment: JSON.parse(JSON.stringify(cus.payment)),
            billTotal: totals.bill,
            paidTotal: totals.paid
        });
        markGone(cus, cus.tx.concat(cus.payment).map(x => x.id));
        cus.tx = [];
        cus.payment = [];
    }
}

// ---------- ফোন নম্বর বদল ----------
function editP(idx) {
    checkMyPassword(function() {
        currentEditCusIdx = idx;
        const c = appData.customers[idx], used = c.nameChanges || 0, nameEl = document.getElementById('editNameInput');
        nameEl.value = c.name;
        nameEl.disabled = used >= NAME_CHANGE_LIMIT;
        document.getElementById('editNameNote').textContent = used >= NAME_CHANGE_LIMIT
            ? '🔒 নাম আর বদলানো যাবে না (সর্বোচ্চ ' + NAME_CHANGE_LIMIT + ' বার বদলানো হয়ে গেছে)'
            : 'নাম সর্বোচ্চ ' + NAME_CHANGE_LIMIT + ' বার বদলানো যায় — এ পর্যন্ত ' + used + ' বার বদলানো হয়েছে';
        document.getElementById('editPhoneInput').value = c.phone;
        openModal('editPhoneModal');
    });
}
const NAME_CHANGE_LIMIT = 2;

function saveEditPhone() {
    const c = appData.customers[currentEditCusIdx];
    if (!c) return;
    const p = document.getElementById('editPhoneInput').value.replace(/[^0-9]/g, '');
    const name = document.getElementById('editNameInput').value.trim();
    if (!name) return alert('নাম খালি রাখা যাবে না');
    if (!p) return alert('সঠিক ফোন নম্বর লিখুন');
    if (name !== c.name) {
        if ((c.nameChanges || 0) >= NAME_CHANGE_LIMIT) return alert('🔒 নাম আর বদলানো যাবে না');
        if (!confirm('নাম "' + c.name + '" থেকে "' + name + '" করবেন?\n\n(নাম সর্বোচ্চ ' + NAME_CHANGE_LIMIT + ' বার বদলানো যায়। এটা ' + ((c.nameChanges || 0) + 1) + ' নম্বর বদল।)')) return;
        c.name = name;
        c.nameChanges = (c.nameChanges || 0) + 1;
    }
    c.phone = p;
    save();
    closeModal('editPhoneModal');
    filterCustomers();
}

// ---------- ডিলিট: আগে পাসওয়ার্ড, তারপর নিশ্চিতকরণ, তারপর লগ ----------
function delTx(ci, ti) {
    requestTransactionPin('🔐 হিসাব ডিলিট করতে পাসওয়ার্ড দিন', 'সঠিক পাসওয়ার্ড দিলে ডিলিটের নিশ্চিতকরণ আসবে', function() {
        const c0 = appData.customers[ci];
        const t0 = c0 && c0.tx[ti];
        if (!t0) return;
        const tid = t0.id;
        showConfirmDelete('এই হিসাবটি ডিলিট করবেন?', function() {
            const c = appData.customers[ci];
            if (!c) return;
            const k = tid ? c.tx.findIndex(x => x.id === tid) : ti;
            if (k < 0 || !c.tx[k]) return;
            const t = c.tx[k];
            logDelete('tx', c, { item: t.tp, qty: t.qty, amt: t.amt, pay: Calc.isCash(t) ? 'cash' : 'baki', dt: t.dt, origBy: t.byName || '' });
            markGone(c, [t.id]);
            c.tx.splice(k, 1);
            save(); filterCustomers(); renderReports();
        });
    });
}

function delPayment(ci, pi) {
    requestTransactionPin('🔐 জমা ডিলিট করতে পাসওয়ার্ড দিন', 'সঠিক পাসওয়ার্ড দিলে ডিলিটের নিশ্চিতকরণ আসবে', function() {
        const c0 = appData.customers[ci];
        const p0 = c0 && (c0.payment || [])[pi];
        if (!p0) return;
        const pid = p0.id;
        showConfirmDelete('এই জমার রেকর্ড ডিলিট করবেন?', function() {
            const c = appData.customers[ci];
            if (!c) return;
            const k = pid ? c.payment.findIndex(x => x.id === pid) : pi;
            if (k < 0 || !c.payment[k]) return;
            const p = c.payment[k];
            logDelete('payment', c, { amt: p.amt, dt: p.dt, origBy: p.byName || '' });
            markGone(c, [p.id]);
            c.payment.splice(k, 1);
            save(); filterCustomers(); renderReports();
        });
    });
}

// কাস্টমার ডিলিট (শুধু মালিক) — লগইন-পাসওয়ার্ড লাগে
function delC(idx) {
    if (!isOwner()) return showEmployeeLockedMsg();
    checkMyPassword(function() {
        const c0 = appData.customers[idx];
        if (!c0) return;
        const cid = c0.id;
        showConfirmDelete(`"${c0.name}" এর অ্যাকাউন্ট ডিলিট করবেন?`, function() {
            const k = cid ? appData.customers.findIndex(x => x.id === cid) : idx;
            const c = appData.customers[k];
            if (!c) return;
            logDelete('customer', c, { due: Calc.totals(c).due, txCount: (c.tx || []).length });
            appData.customers.splice(k, 1);
            save(); filterCustomers(); renderReports();
        });
    });
}
// ---------- নোট (শুধু মালিক) ----------
function openNoteModal(cusIdx) {
    if (!isOwner()) return alert('🔒 নোট শুধু মালিক দেখতে পারেন');
    checkMyPassword(function() {
        currentNoteCusIdx = cusIdx;
        const cus = appData.customers[cusIdx];
        document.getElementById('noteCustomerName').innerText = cus.name;
        document.getElementById('noteInput').value = cus.note || '';
        updateNoteCharCount();
        document.getElementById('noteDeleteBtn').style.display = (cus.note && cus.note.trim()) ? 'block' : 'none';
        openModal('noteModal');
    });
}
function updateNoteCharCount() {
    document.getElementById('noteCharCount').innerText = document.getElementById('noteInput').value.length;
}
function saveNote() {
    if (currentNoteCusIdx === null) return;
    if (!isOwner()) return;
    appData.customers[currentNoteCusIdx].note = document.getElementById('noteInput').value.trim();
    save();
    closeModal('noteModal');
    filterCustomers();
}
function deleteNote() {
    if (currentNoteCusIdx === null) return;
    if (!isOwner()) return;
    appData.customers[currentNoteCusIdx].note = '';
    save();
    closeModal('noteModal');
    filterCustomers();
}

// ---------- ছবি ----------
function togglePhotoMenu(e, idx) {
    e.stopPropagation();
    document.querySelectorAll('.photo-menu').forEach(m => m.classList.remove('show'));
    const menu = document.getElementById(`photo-menu-${idx}`);
    if (menu) menu.classList.toggle('show');
}
function openPhotoUpload(idx) {
    document.querySelectorAll('.photo-menu').forEach(m => m.classList.remove('show'));
    currentPhotoCusIdx = idx;
    openModal('photoSourceModal');
}
function pickFromCamera() {
    closeModal('photoSourceModal');
    document.getElementById('cameraInput').click();
}
function pickFromGallery() {
    closeModal('photoSourceModal');
    document.getElementById('galleryInput').click();
}
function handlePhotoUpload(e) {
    const file = e.target.files[0];
    e.target.value = '';
    const idx = currentPhotoCusIdx;
    openCropper(file, function(dataUrl) {
        if (!appData.customers[idx]) return;
        appData.customers[idx].photo = dataUrl;
        save();
        filterCustomers();
    });
}

function removePhoto(idx) {
    document.querySelectorAll('.photo-menu').forEach(m => m.classList.remove('show'));
    showConfirmDelete('ছবিটি ডিলিট করবেন?', function() {
        appData.customers[idx].photo = null;
        save();
        filterCustomers();
    });
}
function viewPhoto(idx) {
    const c = appData.customers[idx];
    if (!c.photo) return;
    document.getElementById('photoViewImg').src = c.photo;
    openModal('photoViewModal');
}

// ---------- হিস্টোরি ----------
function toggleHistory(idx) {
    const sec = document.getElementById(`history-section-${idx}`);
    if (!sec) return;
    const showing = sec.classList.contains('show');
    document.querySelectorAll('.history-section.show').forEach(s => s.classList.remove('show'));
    if (!showing) {
        sec.classList.add('show');
        currentHistoryFilter = 'all';
        renderHistory(idx);
    }
}
function setHistoryFilter(idx, filter) {
    event.stopPropagation();
    currentHistoryFilter = filter;
    document.querySelectorAll(`#history-section-${idx} .history-filter-btn`).forEach(b => {
        b.classList.toggle('active', b.dataset.filter === filter);
    });
    renderHistory(idx);
}

function renderHistory(idx) {
    const cus = appData.customers[idx];
    const wrap = document.getElementById(`history-content-${idx}`);
    if (!wrap) return;
    let hist = cus.history || [];
    if (currentHistoryFilter !== 'all') {
        const days = parseInt(currentHistoryFilter);
        hist = hist.filter(h => daysAgo(h.archivedAt) <= days);
    }
    if (hist.length === 0) {
        wrap.innerHTML = '<div class="history-empty">এই সময়ে কিছু নেই।</div>';
        return;
    }
    const grouped = {};
    hist.forEach(h => {
        const d = (h.tx && h.tx[0]) ? h.tx[0].dt : h.archivedAt.split('T')[0];
        const mk = d.slice(0, 7);
        if (!grouped[mk]) grouped[mk] = [];
        grouped[mk].push(h);
    });
    let html = '';
    Object.keys(grouped).sort().reverse().forEach(mk => {
        const items = grouped[mk];
        const sd = items[0].tx[0]?.dt || items[0].archivedAt.split('T')[0];
        let total = 0;
        items.forEach(h => { total += h.billTotal || 0; });
        html += `<div class="history-month-group">
            <div class="history-month-title"><span>📅 ${formatMonthBn(sd)}</span><span>মোট: ${Calc.r2(total)} ৳</span></div>
            <table class="history-table"><thead><tr><th>তারিখ</th><th>বিবরণ</th><th>টাকা</th></tr></thead><tbody>`;
        items.forEach(h => {
            (h.tx || []).forEach(t => {
                const lb = txLabel(t);
                const byTag = t.byName ? ` <span class="by-tag">👤 ${escapeHtml(t.byName)}</span>` : '';
                const payTag = Calc.isCash(t) ? ' <span class="by-tag cash-tag">💵 নগদ</span>' : ' <span class="by-tag baki-tag">📒 বাকি</span>';
                html += `<tr><td>${escapeHtml(t.dt)}</td><td>${lb.icon} ${escapeHtml(lb.text)}${byTag}${payTag}</td><td>${escapeHtml(t.amt)} ৳</td></tr>`;
            });
            (h.payment || []).forEach(p => {
                const byTag = p.byName ? ` <span class="by-tag">👤 ${escapeHtml(p.byName)}</span>` : '';
                html += `<tr class="hist-paid-row"><td>${escapeHtml(p.dt)}</td><td>💵 জমা${byTag}</td><td>${escapeHtml(p.amt)} ৳</td></tr>`;
            });
        });
        html += `</tbody></table></div>`;
    });
    wrap.innerHTML = html;
}

// ================== 10. সার্চ, রিপোর্ট, সেটিংস, ব্যাকআপ, প্রিন্ট ==================
function searchClearVis() {
    const b = document.getElementById('searchClearBtn'), i = document.getElementById('searchBar');
    if (b && i) b.style.display = i.value ? 'inline-flex' : 'none';
}
function clearSearch() {
    const i = document.getElementById('searchBar');
    i.value = '';
    SEARCH_PIN = null;
    document.getElementById('autocompleteList').style.display = 'none';
    searchClearVis();
    filterCustomers();
    i.focus();
}
function handleSearchInput(e) {
    SEARCH_PIN = null;
    closeFilterOnSearch();
    searchClearVis();

    const q = e.target.value.toLowerCase().trim();
    const box = document.getElementById('autocompleteList');
    filterCustomers();
    if (!q) { box.style.display = 'none'; return; }
    const matches = sortByRecent(appData.customers.filter(c => c.name.toLowerCase().startsWith(q) || c.phone.startsWith(q)));
    if (matches.length > 0) {
        box.innerHTML = '';
        matches.forEach(c => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.innerHTML = `<div class="ac-left"><div class="ac-avatar">${avatarHtml(c)}</div><strong>${escapeHtml(c.name)}</strong></div><span>📞 ${c.phone}</span>`;
            item.onclick = function() {
                SEARCH_PIN = c.id;   // যাকে চাপা হলো, তার কার্ডই সবার উপরে আসবে (একই নামের আরেকজন থাকলেও)
                document.getElementById('searchBar').value = c.name;
                box.style.display = 'none';
                filterCustomers();
            };
            box.appendChild(item);
        });
        box.style.display = 'block';
    } else box.style.display = 'none';
}

// সর্বশেষ এন্ট্রি/জমা যার, সে ওপরে (এন্ট্রির সময় ধরে; না থাকলে তারিখ)
function lastActivity(c) {
    let best = '';
    const take = x => { const k = String(x.at || x.dt || ''); if (k > best) best = k; };
    (c.tx || []).forEach(take); (c.payment || []).forEach(take);
    return best;
}
function sortByRecent(list) {
    return list.map((c, i) => ({ c, i, k: lastActivity(c) }))
        .sort((a, b) => (a.k < b.k ? 1 : a.k > b.k ? -1 : a.i - b.i)).map(x => x.c);
}
function filterCustomers() {
    const q = document.getElementById('searchBar').value.toLowerCase().trim();
    let list = appData.customers.filter(c => c.name.toLowerCase().startsWith(q) || c.phone.startsWith(q));
    if (dateFilter.type !== 'all') list = list.filter(customerMatchesDateFilter);
    show(sortByRecent(list));
}
function updateTopStats() {
    const topCust = document.getElementById('topTotalCust');
    const topDue = document.getElementById('topTotalDue');
    if (topCust) topCust.innerText = appData.customers.length;
    let t = 0;
    appData.customers.forEach(c => t += Math.max(0, getCustomerTotals(c).due));
    if (topDue) topDue.innerText = '৳ ' + Calc.r2(t);
}
function updateCount(showing) {
    const b = document.getElementById('countBadge');
    if (!b) return;
    b.innerText = (showing < appData.customers.length) ? `${showing}/${appData.customers.length} জন` : `${appData.customers.length} জন`;
}

// ---- বিক্রির হিসাব (শুধু মালিক) ----
let salesKey = 'today';
function salesRange() {
    const t = new Date();
    const d = n => { const x = new Date(t); x.setDate(x.getDate() - n); return ymd(x); };
    if (salesKey === 'today') return [d(0), d(0)];
    if (salesKey === 'yesterday') return [d(1), d(1)];
    if (salesKey === 'week') return [d(6), d(0)];
    if (salesKey === 'month') return [ymd(new Date(t.getFullYear(), t.getMonth(), 1)), d(0)];
    if (salesKey === 'lastmonth') return [ymd(new Date(t.getFullYear(), t.getMonth() - 1, 1)), ymd(new Date(t.getFullYear(), t.getMonth(), 0))];
    return [document.getElementById('salesFrom').value, document.getElementById('salesTo').value];
}
function setSalesRange(k) { salesKey = k; renderSales(); }
function renderSales() {
    const sec = document.getElementById('repSalesSection');
    if (!sec) return;
    if (!isOwner()) { sec.style.display = 'none'; return; }
    sec.style.display = '';
    document.querySelectorAll('#salesChips button').forEach(b => b.classList.toggle('on', b.dataset.k === salesKey));
    document.getElementById('salesCustom').style.display = salesKey === 'custom' ? 'flex' : 'none';
    const [from, to] = salesRange();
    const f = n => String(Math.round(n * 100) / 100);
    document.getElementById('salesRangeText').textContent = (!from && !to) ? 'তারিখ বাছুন'
        : (from === to ? formatDateBn(from) : (from ? formatDateBn(from) : '…') + ' থেকে ' + (to ? formatDateBn(to) : '…'));
    const r = Calc.salesReport(appData, from, to);
    document.getElementById('salesCards').innerHTML =
        `<div class="report-card"><div class="rc-icon si-green">💵</div><div class="rc-value green">৳ ${f(r.cash)}</div><div class="rc-label">নগদ বিক্রি</div></div>` +
        `<div class="report-card"><div class="rc-icon si-orange">📒</div><div class="rc-value orange">৳ ${f(r.baki)}</div><div class="rc-label">বাকিতে বিক্রি</div></div>` +
        `<div class="report-card"><div class="rc-icon si-blue">💰</div><div class="rc-value">৳ ${f(r.collected)}</div><div class="rc-label">বাকি আদায় (জমা)</div></div>` +
        `<div class="report-card"><div class="rc-icon si-red">🧾</div><div class="rc-value red">৳ ${f(r.cash + r.baki)}</div><div class="rc-label">মোট বিক্রি</div></div>`;
    const rows = Object.keys(r.items).map(k => ({ k, c: r.items[k].cash, b: r.items[k].baki })).sort((a, b) => (b.c + b.b) - (a.c + a.b));
    document.getElementById('salesItems').innerHTML = rows.length
        ? '<div class="sales-row head"><span>পণ্য</span><span>নগদ</span><span>বাকি</span></div>' +
          rows.map(x => `<div class="sales-row"><span>${escapeHtml(x.k)}</span><span class="g">${f(x.c)}</span><span class="o">${f(x.b)}</span></div>`).join('')
        : '<p class="pdf-note" style="text-align:center">এই সময়ে কোনো বিক্রি নেই</p>';
}

function renderReports() {
    renderSales();
    let due = 0, paidCount = 0, dueCount = 0;
    const list = [];
    appData.customers.forEach(c => {
        const t = getCustomerTotals(c);
        if (t.bill <= 0 && t.due <= 0 && (c.history || []).length > 0) paidCount++;   // হিসাব মিটিয়ে হিস্টোরিতে চলে গেছে
        if (t.bill > 0) {
            if (t.due <= 0) paidCount++;
            else {
                dueCount++;
                due += t.due;
                list.push({ name: c.name, due: t.due });
            }
        }
    });
    const e1 = document.getElementById('repTotalCust');
    if (e1) e1.innerText = appData.customers.length;
    const e2 = document.getElementById('repTotalDue');
    if (e2) e2.innerText = '৳ ' + Calc.r2(due);
    const e3 = document.getElementById('repPaidCust');
    if (e3) e3.innerText = paidCount;
    const e4 = document.getElementById('repDueCust');
    if (e4) e4.innerText = dueCount;
    list.sort((a, b) => b.due - a.due);
    const t = document.getElementById('topDueList');
    if (!t) return;
    if (list.length === 0) {
        t.innerHTML = '<p style="text-align:center; color:#64748b; padding:20px; background:#fff; border-radius:14px;">সব পরিশোধিত ✅</p>';
        return;
    }
    t.innerHTML = list.slice(0, 10).map((x, i) => `
        <div class="top-due-item">
            <div class="top-due-rank">${i + 1}</div>
            <div class="top-due-name">${escapeHtml(x.name)}</div>
            <div class="top-due-amt">${x.due} ৳</div>
        </div>
    `).join('');
}

function openSecurityMenu() {
    const r = document.getElementById('secTxPinRow'); if (r) r.style.display = isOwner() ? '' : 'none';
    fpRefreshRow();
    openModal('securityModal');
}
function secGo(action) {
    // ফিঙ্গারপ্রিন্ট শুধু alert/confirm দেখায়, তাই মেনু খোলা রেখে ফিরে এসে লেখা বদলায়
    if (action !== 'fingerprint') closeModal('securityModal');
    handleSetting(action);
    if (action === 'fingerprint') setTimeout(fpRefreshRow, 300);
}
function handleSetting(action) {
    if (action === 'theme') return openThemeModal();
    if (action === 'doclang') return toggleDocLang();
    if (action === 'backup') {
        if (!isOwner()) return showEmployeeLockedMsg();
        checkMyPassword(exportData);
    } else if (action === 'restore') {
        if (!isOwner()) return showEmployeeLockedMsg();
        checkMyPassword(function() { document.getElementById('importFileInput').click(); });
    } else if (action === 'employees') {
        if (!isOwner()) return showEmployeeLockedMsg();
        openEmployeesList();
    } else if (action === 'password') {
        openChangeMyPassword();
    } else if (action === 'recovery') {
        openMyRecoverySetup();
    } else if (action === 'txpin') {
        if (!isOwner()) return showEmployeeLockedMsg();
        openChangeTxPin();
    } else if (action === 'deletelog') {
        if (!isOwner()) return showEmployeeLockedMsg();
        openDeleteLog();
    } else if (action === 'notice') {
        if (!isOwner()) return showEmployeeLockedMsg();
        openNoticeAdmin();
    } else if (action === 'walert') {
        if (!isOwner()) return showEmployeeLockedMsg();
        toggleWaNotify();
    } else if (action === 'recharge') {
        if (!isOwner()) return showEmployeeLockedMsg();
        openRechargeApp();
    } else if (action === 'bulk') {
        if (!isOwner()) return showEmployeeLockedMsg();
        openBulk();
    } else if (action === 'fingerprint') {
        fpSettings();
    } else if (action === 'cloud') {
        if (!isOwner()) return showEmployeeLockedMsg();
        openCloudModal();
    } else if (action === 'pdfreport') {
        if (!isOwner()) return showEmployeeLockedMsg();
        checkMyPassword(openPdfReport);
    }
}

// ---------- ব্যাকআপ / রিস্টোর ----------
// ---- APK (Android WebView) সাহায্য: ফাইল সেভ/শেয়ার করতে বাইরের ব্রিজ ----
function strToBase64(str) {
    const b = new TextEncoder().encode(str);
    let s = '';
    for (let i = 0; i < b.length; i += 8192) s += String.fromCharCode.apply(null, b.subarray(i, i + 8192));
    return btoa(s);
}
function blobToBase64(blob) {
    return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).split(',')[1]); r.onerror = rej; r.readAsDataURL(blob); });
}
function exportData() {
    const backup = {
        version: 11,
        exportedAt: now(),
        exportedBy: currentUser.name,
        data: appData
    };
    const fname = `BakiKhata_Backup_${new Date().toISOString().slice(0,10)}.json`;
    if (window.AndroidApp) {                       // APK: ফোনের Download ফোল্ডারে সেভ
        AndroidApp.saveFile(fname, 'application/json', strToBase64(JSON.stringify(backup)));
    } else {
        const a = document.createElement('a');
        a.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup));
        a.download = fname;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
    try { localStorage.setItem('bkLastBackup', String(Date.now())); } catch (err) {}
    updateBackupWarn();
}

function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        try {
            const parsed = JSON.parse(ev.target.result);
            const incoming = parsed.data || parsed;
            if (!incoming || !incoming.owner) throw new Error();
            appData = normalizeData(incoming);
            save();
            alert('✅ ডাটা রিস্টোর হয়েছে!\n\nনিরাপত্তার জন্য আবার লগইন করুন।');
            location.reload();
        } catch(err) {
            alert('❌ ফাইল ফরম্যাট সঠিক নয়');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

// প্রিন্ট স্ক্রিন খুলে "PDF হিসেবে সেভ" বেছে নিলে ফাইলে নামে। title-ই ফাইলের নাম হয়।
function printHtml(html, title) {
    const pa = document.getElementById('printArea');
    pa.innerHTML = html;
    pa.style.display = 'block';
    const oldTitle = document.title;
    if (title) document.title = title;
    const cleanup = () => { pa.style.display = 'none'; pa.innerHTML = ''; document.title = oldTitle; };
    window.addEventListener('afterprint', cleanup, { once: true });
    setTimeout(() => { window.print(); setTimeout(cleanup, 60000); }, 500);
}

// ---------- সব কাস্টমারের হিসাব এক PDF-এ (শুধু মালিক) ----------
function openPdfReport() {
    document.getElementById('pdfItems').innerHTML = appData.itemList.map((it, i) =>
        `<label class="pdf-opt"><input type="checkbox" class="pdf-item" value="${i}" checked onchange="pdfSyncAll()"> ${itemIconOf(it)} ${escapeHtml(it.name)}</label>`).join('');
    document.getElementById('pdfAll').checked = true;
    ['pdfHistory', 'pdfOnlyDue'].forEach(id => { document.getElementById(id).checked = false; });
    ['pdfFrom', 'pdfTo'].forEach(id => { document.getElementById(id).value = ''; });
    document.getElementById('pdfError').style.display = 'none';
    openModal('pdfModal');
}
function pdfToggleAll(cb) { document.querySelectorAll('.pdf-item').forEach(c => { c.checked = cb.checked; }); }
function pdfSyncAll() {
    const all = [...document.querySelectorAll('.pdf-item')];
    document.getElementById('pdfAll').checked = all.length > 0 && all.every(c => c.checked);
}

// ---- রিপোর্টের তথ্য একবার সাজানো হয়; তারপর PDF/প্রিন্ট দুই জায়গাতেই একই তথ্য যায় ----
const fmtNum = n => String(Math.round(n * 100) / 100);
function buildBlock(c, o) {
    const rows = [];
    const inRange = d => (!o.from || d >= o.from) && (!o.to || d <= o.to);
    const addTx = (t, h) => {
        if ((o.names && !o.names.has(t.tp)) || !inRange(t.dt)) return;
        let text = txLabel(t).text + (h ? ' (হিস্টোরি)' : '');
        rows.push({ dt: t.dt, text, kind: Calc.isCash(t) ? 'cash' : 'baki', amt: String(t.amt), n: Calc.num(t.amt) });
    };
    const addPay = p => { if (inRange(p.dt)) rows.push({ dt: p.dt, text: 'জমা', kind: 'pay', amt: '−' + p.amt, n: 0 }); };
    (c.tx || []).forEach(t => addTx(t, false));
    if (o.hist) (c.history || []).forEach(h => (h.tx || []).forEach(t => addTx(t, true)));
    if (o.payments) {
        (c.payment || []).forEach(addPay);
        if (o.hist) (c.history || []).forEach(h => (h.payment || []).forEach(addPay));
    }
    rows.sort((a, b) => (a.dt < b.dt ? -1 : a.dt > b.dt ? 1 : 0));
    return rows;
}
function docHeader(title, filter) {
    const sh = appData.shop || {};
    const lines = [];
    if (sh.phone) lines.push('ফোন: ' + sh.phone);
    if (sh.address) lines.push('ঠিকানা: ' + sh.address);
    return { shop: sh.name || 'বাকি খাতা', lines, title, date: dateBnNow(), filter: filter || '' };
}
const dateBnNow = () => new Date().toLocaleDateString(docEn() ? 'en-GB' : 'bn-BD', { day: 'numeric', month: 'long', year: 'numeric' });

function docForCustomer(cus) {
    const T = Calc.totals(cus);
    const rows = buildBlock(cus, { names: null, hist: false, payments: true });
    const foot = [{ l: 'মোট বিল', v: T.bill + ' টাকা' }, { l: 'মোট জমা', v: T.paid + ' টাকা', c: '#16a34a' },
        { l: T.due > 0 ? 'বাকি' : 'পরিশোধিত', v: Math.max(0, T.due) + ' টাকা', c: T.due > 0 ? '#dc2626' : '#10b981', b: 1 }];
    if (T.cash > 0) foot.push({ l: 'নগদ বিক্রি (পরিশোধিত)', v: T.cash + ' টাকা', c: '#166534' });
    return { header: docHeader('কাস্টমার হিসাব'), blocks: [{ name: cus.name, phone: cus.phone, due: T.due > 0 ? 'মোট বাকি: ' + fmtNum(T.due) + ' টাকা' : 'সব পরিশোধিত', dueBad: T.due > 0, rows, foot }], summary: [], single: true };
}

function docForAll(o) {
    const picked = o.picked, allSel = o.allSel;
    const blocks = [], G = { baki: 0, cash: 0, due: 0 };
    appData.customers.forEach(c => {
        const T = Calc.totals(c);
        if (o.onlyDue && T.due <= 0) return;
        const rows = buildBlock(c, { names: new Set(picked.map(i => i.name)), hist: o.hist, from: o.from, to: o.to, payments: allSel });
        if (!rows.some(r => r.kind !== 'pay')) return;          // এই পণ্য নেয়নি — বাদ
        let baki = 0, cash = 0;
        rows.forEach(r => { if (r.kind === 'baki') baki += r.n; else if (r.kind === 'cash') cash += r.n; });
        baki = Calc.r2(baki); cash = Calc.r2(cash); G.baki = Calc.r2(G.baki + baki); G.cash = Calc.r2(G.cash + cash); if (T.due > 0) G.due = Calc.r2(G.due + T.due);
        blocks.push({ name: c.name, phone: c.phone, due: T.due > 0 ? 'মোট বাকি: ' + fmtNum(T.due) + ' টাকা' : 'পরিশোধিত', dueBad: T.due > 0, rows,
            foot: [{ l: 'বাকি-বিল', v: fmtNum(baki) + ' টাকা' }, { l: 'নগদ', v: fmtNum(cash) + ' টাকা', c: '#166534' }] });
    });
    const filt = [allSel ? 'সব পণ্য' : 'পণ্য: ' + picked.map(i => i.name).join(', ')];
    if (o.from || o.to) filt.push('তারিখ: ' + (o.from || '…') + ' থেকে ' + (o.to || '…'));
    if (o.hist) filt.push('হিস্টোরিসহ');
    if (o.onlyDue) filt.push('শুধু বাকি আছে যাদের');
    const summary = [{ l: 'মোট কাস্টমার', v: blocks.length + ' জন' }, { l: 'বাকি-বিল', v: fmtNum(G.baki) + ' টাকা' }, { l: 'নগদ', v: fmtNum(G.cash) + ' টাকা', c: '#166534' }];
    if (allSel) summary.push({ l: 'মোট বাকি', v: fmtNum(G.due) + ' টাকা', c: '#dc2626', b: 1 });
    return { header: docHeader('সব কাস্টমারের হিসাব', filt.join(' · ')), blocks, summary, single: false };
}

// ---- ছবির মতো করে পাতা আঁকা (ফোনের নিজের বাংলা ফন্ট দিয়ে, তাই ব্রাউজার ও অ্যাপ দুই জায়গাতেই একই) ----
const PDF_FONT = "'Hind Siliguri','Noto Sans Bengali','Nirmala UI','Siyam Rupali',Vrinda,FreeSerif,sans-serif";
function renderDocPages(doc) {
    const W = 1240, H = 1754, M = 70, LIM = H - M - 30, pages = [];
    const CX = { date: M, desc: M + 250, kind: M + 880 }, DESC_W = 600;
    let cv, g, y;
    const font = (sz, bold) => (bold ? '700 ' : '400 ') + sz + 'px ' + PDF_FONT;
    const newPage = () => {
        cv = document.createElement('canvas'); cv.width = W; cv.height = H;
        g = cv.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, W, H); g.textBaseline = 'alphabetic';
        pages.push(cv); y = M;
        if (pages.length > 1) {                       // পরের পাতায় ছোট শিরোনাম
            g.fillStyle = '#4f46e5'; g.fillRect(0, 0, W, 10);
            text(doc.header.shop + ' · ' + doc.header.title, M, M - 14, 22, true, '#4f46e5'); y = M + 18;
        }
    };
    const rrect = (x, yy, w, h, r, fill, stroke) => {
        g.beginPath(); if (g.roundRect) g.roundRect(x, yy, w, h, r); else g.rect(x, yy, w, h);
        if (fill) { g.fillStyle = fill; g.fill(); } if (stroke) { g.strokeStyle = stroke; g.lineWidth = 2; g.stroke(); }
    };
    const text = (s, x, yy, sz, bold, color, align) => { g.font = font(sz, bold); g.fillStyle = color || '#0f172a'; g.textAlign = align || 'left'; g.fillText(docTr(s), x, yy); };
    const wrap = (txt, maxW, sz, bold) => {
        g.font = font(sz, bold);
        const lines = []; let cur = '';
        String(txt).split(/\s+/).forEach(w => {
            const t = cur ? cur + ' ' + w : w;
            if (g.measureText(t).width <= maxW) { cur = t; return; }
            if (cur) lines.push(cur);
            if (g.measureText(w).width <= maxW) { cur = w; return; }
            let part = ''; Array.from(w).forEach(ch => { if (g.measureText(part + ch).width > maxW) { lines.push(part); part = ch; } else part += ch; });
            cur = part;
        });
        if (cur) lines.push(cur);
        return lines.length ? lines : [''];
    };
    const rule = (yy, color, w) => { g.fillStyle = color; g.fillRect(M, yy, W - 2 * M, w || 2); };
    const footLines = (arr, x0) => { const bh = arr.reduce((a, f) => a + (f.b ? 46 : 38), 0) + 24; rrect(M, y - 28, W - 2 * M, bh, 14, '#f8fafc', '#e2e8f0'); y += 8; arr.forEach(f => { text(f.l, x0 + 16, y, 26, f.b, '#334155'); text(f.v, W - M - 20, y, f.b ? 30 : 26, true, f.c || '#0f172a', 'right'); y += f.b ? 46 : 38; }); y += 10; };

    newPage();
    {   // ওপরে দোকানের পরিচয়-পট্টি
        const lines = doc.header.lines, bandH = 120 + lines.length * 34;
        g.fillStyle = '#3730a3'; g.fillRect(0, 0, W, bandH);
        g.fillStyle = '#6366f1'; g.fillRect(0, bandH - 8, W, 8);
        text(doc.header.shop, W / 2, 78, 52, true, '#ffffff', 'center');
        lines.forEach((l, i) => text(l, W / 2, 124 + i * 34, 25, false, '#c7d2fe', 'center'));
        y = bandH + 36;
        // শিরোনাম ও তারিখ
        text(doc.header.title, M, y + 26, 32, true, '#1e1b4b');
        rrect(W - M - 330, y - 2, 330, 46, 23, '#eef2ff');
        text('তারিখ: ' + doc.header.date, W - M - 165, y + 29, 23, true, '#3730a3', 'center');
        y += 62;
        if (doc.header.filter) { text(doc.header.filter, M, y + 20, 21, false, '#64748b'); y += 34; }
        y += 6;
    }

    doc.blocks.forEach(b => {
        b.rows.forEach(r => { r.lines = wrap(r.text, DESC_W, 24, false); r.h = r.lines.length * 32 + 16; });
        const headH = 96 + 14 + 42, footH = b.foot.reduce((a, f) => a + (f.b ? 46 : 38), 56);
        const total = headH + (b.rows.reduce((a, r) => a + r.h, 0) || 44) + footH + 26;
        if (total <= LIM - M && y + total > LIM) newPage();       // পুরো কাস্টমার এক পাতায় ধরলে ভেঙে ভাগ করা হয় না
        const drawHead = cont => {
            if (y + headH + 60 > LIM) newPage();
            rrect(M, y, W - 2 * M, 96, 16, '#f8fafc', '#e2e8f0');
            g.fillStyle = '#4f46e5'; g.fillRect(M, y + 14, 8, 68);
            text(b.name + (cont ? ' (চলমান)' : ''), M + 30, y + 44, 34, true, '#0f172a');
            text('ফোন: ' + b.phone, M + 30, y + 78, 24, false, '#475569');
            if (b.due) { rrect(W - M - 330, y + 24, 306, 48, 24, b.dueBad ? '#fee2e2' : '#dcfce7');
                text(b.due, W - M - 177, y + 57, 24, true, b.dueBad ? '#b91c1c' : '#166534', 'center'); }
            y += 110;
            g.fillStyle = '#4f46e5'; g.fillRect(M, y, W - 2 * M, 42);
            text('তারিখ', CX.date + 8, y + 29, 22, true, '#fff'); text('বিবরণ', CX.desc, y + 29, 22, true, '#fff');
            text('ধরন', CX.kind, y + 29, 22, true, '#fff'); text('টাকা', W - M - 8, y + 29, 22, true, '#fff', 'right');
            y += 42;
        };
        let zebra = false;
        drawHead(false);
        if (!b.rows.length) { text('কোনো বিল নেই', W / 2, y + 30, 24, false, '#94a3b8', 'center'); y += 44; }
        b.rows.forEach(r => {
            if (y + r.h > LIM) { newPage(); drawHead(true); }
            zebra = !zebra;
            if (r.kind === 'pay') { g.fillStyle = '#f0fdf4'; g.fillRect(M, y, W - 2 * M, r.h); }
            else if (zebra) { g.fillStyle = '#f8fafc'; g.fillRect(M, y, W - 2 * M, r.h); }
            const col = r.kind === 'pay' ? '#166534' : '#0f172a';
            text(r.dt, CX.date + 8, y + 30, 24, false, col);
            r.lines.forEach((ln, i) => text(ln, CX.desc, y + 30 + i * 32, 24, false, col));
            text(r.kind === 'baki' ? 'বাকি' : r.kind === 'cash' ? 'নগদ' : '', CX.kind, y + 30, 22, true, r.kind === 'baki' ? '#b91c1c' : '#166534');
            text(r.amt, W - M - 8, y + 30, 24, true, col, 'right');
            y += r.h; rule(y - 1, '#e2e8f0', 1);
        });
        if (y + footH > LIM) newPage();
        y += 50; footLines(b.foot, M + 8); y += 22;
    });
    if (doc.summary.length) {
        const sh = doc.summary.reduce((a, f) => a + (f.b ? 46 : 38), 40);
        if (y + sh > LIM) newPage();
        rule(y, '#4f46e5', 3); y += 40; footLines(doc.summary, M + 8);
    }
    text('ধন্যবাদ', W / 2, Math.min(y + 50, H - M), 22, false, '#94a3b8', 'center');
    pages.forEach((p, i) => { const c = p.getContext('2d'); c.font = font(20, false); c.fillStyle = '#94a3b8'; c.textAlign = 'right'; c.fillText(docTr('পৃষ্ঠা ' + (i + 1) + '/' + pages.length), W - M, H - 30); });
    return pages;
}

// ---- ছবিগুলো দিয়ে আসল PDF ফাইল বানানো (বাইরের কোনো লাইব্রেরি লাগে না) ----
function pagesToPdf(canvases) {
    const enc = new TextEncoder(), parts = [], offs = [];
    let len = 0;
    const push = b => { if (typeof b === 'string') b = enc.encode(b); parts.push(b); len += b.length; };
    const obj = (n, body) => { offs[n] = len; push(n + ' 0 obj\n' + body + '\nendobj\n'); };
    const n = canvases.length;
    push('%PDF-1.4\n');
    obj(1, '<< /Type /Catalog /Pages 2 0 R >>');
    obj(2, '<< /Type /Pages /Count ' + n + ' /Kids [' + canvases.map((_, i) => (3 + 3 * i) + ' 0 R').join(' ') + '] >>');
    canvases.forEach((cv, i) => {
        const pg = 3 + 3 * i, ct = pg + 1, im = pg + 2;
        const bin = atob(cv.toDataURL('image/jpeg', 0.88).split(',')[1]);
        const jpg = new Uint8Array(bin.length); for (let k = 0; k < bin.length; k++) jpg[k] = bin.charCodeAt(k);
        const content = 'q 595.28 0 0 841.89 0 0 cm /Im0 Do Q';
        obj(pg, '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 ' + im + ' 0 R >> >> /Contents ' + ct + ' 0 R >>');
        obj(ct, '<< /Length ' + content.length + ' >>\nstream\n' + content + '\nendstream');
        offs[im] = len;
        push(im + ' 0 obj\n<< /Type /XObject /Subtype /Image /Width ' + cv.width + ' /Height ' + cv.height + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + jpg.length + ' >>\nstream\n');
        push(jpg); push('\nendstream\nendobj\n');
    });
    const total = 3 + 3 * n, xref = len;
    let x = 'xref\n0 ' + total + '\n0000000000 65535 f \n';
    for (let k = 1; k < total; k++) x += String(offs[k]).padStart(10, '0') + ' 00000 n \n';
    push(x + 'trailer\n<< /Size ' + total + ' /Root 1 0 R >>\nstartxref\n' + xref + '\n%%EOF');
    const out = new Uint8Array(len); let p = 0;
    parts.forEach(b => { out.set(b, p); p += b.length; });
    return new Blob([out], { type: 'application/pdf' });
}

// ---- প্রিন্ট স্ক্রিনের বিকল্প (শুধু ব্রাউজারে) ----
function docToHtml(doc) {
    const foot = a => a.map(f => `<div class="rp-fl" style="${f.c ? 'color:' + f.c : ''}"><span>${escapeHtml(f.l)}</span><b>${escapeHtml(f.v)}</b></div>`).join('');
    const body = doc.blocks.map(b => `<div class="rp-cust"><div class="rp-head"><span><b>${escapeHtml(b.name)}</b> · ${escapeHtml(b.phone)}</span><span class="rp-due">${escapeHtml(b.due || '')}</span></div>` +
        `<table class="rp-table"><thead><tr><th>তারিখ</th><th>বিবরণ</th><th>ধরন</th><th class="r">টাকা</th></tr></thead><tbody>` +
        (b.rows.map(r => `<tr class="${r.kind === 'pay' ? 'rp-pay' : ''}"><td>${escapeHtml(r.dt)}</td><td>${escapeHtml(r.text)}</td><td>${r.kind === 'baki' ? 'বাকি' : r.kind === 'cash' ? 'নগদ' : ''}</td><td class="r">${escapeHtml(r.amt)}</td></tr>`).join('') || '<tr><td colspan="4">কোনো বিল নেই</td></tr>') +
        `</tbody></table><div class="rp-foot">${foot(b.foot)}</div></div>`).join('');
    return `<div class="rp-wrap"><div class="rp-title"><div class="rp-shop">${escapeHtml(doc.header.shop)}</div>` +
        doc.header.lines.map(l => `<div class="rp-sub">${escapeHtml(l)}</div>`).join('') +
        `<div class="rp-sub"><b>${escapeHtml(doc.header.title)}</b> · তারিখ: ${escapeHtml(doc.header.date)}</div>` +
        (doc.header.filter ? `<div class="rp-filter">${escapeHtml(doc.header.filter)}</div>` : '') + `</div>${body}` +
        (doc.summary.length ? `<div class="rp-total">${foot(doc.summary)}</div>` : '') + `</div>`;
}

// ---- তৈরি হলে: শেয়ার / ডাউনলোড / প্রিন্ট ----
let pdfResult = null;
function finishPdf(doc, baseName) {
    try {
        const pages = renderDocPages(doc);
        const blob = pagesToPdf(pages);
        const name = baseName.replace(/[^A-Za-z0-9_-]/g, '-') + '.pdf';
        pdfResult = { blob, name, doc };
        document.getElementById('pdfDoneInfo').textContent = name + ' · ' + pages.length + ' পৃষ্ঠা · ' + Math.max(1, Math.round(blob.size / 1024)) + ' KB';
        let canShare = false;
        try { canShare = !!(navigator.canShare && navigator.canShare({ files: [new File([blob], name, { type: 'application/pdf' })] })); } catch (e) {}
        document.getElementById('pdfShareBtn').style.display = (canShare || window.AndroidApp) ? '' : 'none';
        document.getElementById('pdfPrintBtn').style.display = window.AndroidApp ? 'none' : '';
        openModal('pdfDoneModal');
    } catch (e) {
        alert('❌ PDF বানানো যায়নি: ' + (e && e.message ? e.message : e));
    }
}
function pdfShare() {
    if (!pdfResult) return;
    if (window.AndroidApp) { blobToBase64(pdfResult.blob).then(b => AndroidApp.shareFile(pdfResult.name, 'application/pdf', b)); return; }
    navigator.share({ files: [new File([pdfResult.blob], pdfResult.name, { type: 'application/pdf' })], title: pdfResult.name }).catch(() => {});
}
function pdfDownload() {
    if (!pdfResult) return;
    if (window.AndroidApp) { blobToBase64(pdfResult.blob).then(b => AndroidApp.saveFile(pdfResult.name, 'application/pdf', b)); return; }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(pdfResult.blob); a.download = pdfResult.name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 30000);
}
function pdfPrintFallback() {
    if (!pdfResult) return;
    const d = pdfResult.doc, n = pdfResult.name.replace(/\.pdf$/, '');
    closeModal('pdfDoneModal');
    printHtml(docToHtml(d), n);
}
function pdfCustomer(idx) {
    const c = appData.customers[idx];
    if (c) finishPdf(docCtx(() => docForCustomer(c)), 'baki-khata-' + (String(c.phone).replace(/[^0-9]/g, '') || 'customer') + '-' + todayLocal());
}
function createPdfReport() {
    const err = document.getElementById('pdfError');
    const picked = [...document.querySelectorAll('.pdf-item:checked')].map(c => appData.itemList[+c.value]).filter(Boolean);
    if (!picked.length) { err.textContent = '❌ অন্তত একটা পণ্য বাছুন'; err.style.display = 'block'; return; }
    const doc = docCtx(() => docForAll({
        picked, allSel: picked.length === appData.itemList.length,
        hist: document.getElementById('pdfHistory').checked, onlyDue: document.getElementById('pdfOnlyDue').checked,
        from: document.getElementById('pdfFrom').value, to: document.getElementById('pdfTo').value
    }));
    if (!doc.blocks.length) { err.textContent = '❌ এই বাছাইয়ে কোনো কাস্টমারের হিসাব নেই'; err.style.display = 'block'; return; }
    closeModal('pdfModal');
    finishPdf(doc, 'baki-khata-all-' + todayLocal());
}

// ---------- প্রিন্ট ----------
// ================== রিমাইন্ডার — "অনেক দিন নেয়নি" ==================
// আইটেমে "কত দিন পর মনে করাবে" দিলে, কাস্টমারের শেষ কেনার পর সেই দিন পার হলে হোমে সতর্কবার ও তালিকা আসে
function updateRemindBar() {
    const list = Calc.dueReminders(appData, todayLocal());
    const bar = document.getElementById('remindBar');
    if (bar) {
        bar.style.display = list.length ? 'flex' : 'none';
        document.getElementById('remindCount').textContent = list.length + ' জনের';
    }
    const home = document.querySelector('.nav-btn[data-page="home"]');
    if (home) home.classList.toggle('has-low', list.length > 0);
    return list;
}

function snoozeRemind(idx, itemIdx, mode) {
    const c = appData.customers[idx], it = appData.itemList[itemIdx];
    if (!c || !it) return;
    const r = Calc.dueReminders(appData, todayLocal()).find(x => x.idx === idx && x.itemIdx === itemIdx);
    if (!c.snooze) c.snooze = {};
    if (mode === 'stop') c.snooze[it.name] = { until: null, last: r ? r.last : '' };   // পরের বার কিনলে আবার চালু
    else { const n = +mode || 7, d = new Date(); d.setDate(d.getDate() + n); c.snooze[it.name] = { until: ymd(d), last: r ? r.last : '' }; }
    save();
    updateRemindBar();
    openRemindList();
}

function openRemindList() {
    const list = Calc.dueReminders(appData, todayLocal());
    let h = list.length ? '' : '<p style="text-align:center;color:#64748b;padding:20px;font-style:italic">এখন কারো মনে করানোর সময় হয়নি।</p>';
    list.forEach(r => {
        const msg = docGen(() => `${appData.shop.name ? '🏪 ' + appData.shop.name + '\n' : ''}\nপ্রিয় ${r.name},\nআপনি শেষবার ${r.item} নিয়েছিলেন ${r.last} তারিখে (${r.days} দিন আগে)। দরকার হলে জানাবেন। ধন্যবাদ 🙏`);
        const wa = 'https://wa.me/' + String(r.phone).replace(/[^0-9]/g, '') + '?text=' + encodeURIComponent(msg);
        h += `<div class="rm-item"><div class="rm-main"><b>${escapeHtml(r.name)}</b><div class="rm-sub">${escapeHtml(r.item)} · ${r.days} দিন আগে (${escapeHtml(r.last)})${Calc.num(r.amt) > 0 ? ' · ' + escapeHtml(r.amt) + ' ৳' : ''}</div>` +
            `<div class="rm-actions"><button onclick="snoozeRemind(${r.idx}, ${r.itemIdx}, 1)">🔕 ১ দিন পরে</button><button onclick="snoozeRemind(${r.idx}, ${r.itemIdx}, 3)">🔕 ৩ দিন পরে</button><button onclick="snoozeRemind(${r.idx}, ${r.itemIdx}, 7)">🔕 ৭ দিন পরে</button><button onclick="snoozeRemind(${r.idx}, ${r.itemIdx}, 'stop')">✖ আর মনে করিও না</button></div></div>` +
            `<a class="rm-wa" href="${wa}" target="_blank">💬</a></div>`;
    });
    document.getElementById('remindBody').innerHTML = h;
    openModal('remindModal');
}

// ================== 11. স্টক ==================
// কোনো আইটেমের স্টক শেষ/কম হলে নিচের মেনুর স্টক আইকনে লাল বিন্দু
function updateLowBadge() {
    const btn = document.querySelector('.nav-btn[data-page="stock"]');
    if (!btn) return;
    const bad = Calc.stockItems(appData).some(it => Calc.stockLevel(it, Calc.stockInfo(appData, it.name)) !== 'ok');
    btn.classList.toggle('has-low', bad);
}

function renderStock() {
    const el = document.getElementById('page-stock');
    if (!el) return;
    const items = Calc.stockItems(appData);
    const names = items.map(i => i.name);
    const allEntries = appData.stock.entries.filter(e => names.includes(e.item));
    const entries = allEntries.filter(e => e.kind !== 'supPay').sort((a, b) =>
        (b.dt || '') < (a.dt || '') ? -1 : (b.dt || '') > (a.dt || '') ? 1 : ((b.at || '') < (a.at || '') ? -1 : 1));
    const keepItem = (document.getElementById('stkItem') || {}).value;

    let cards = '', opts = '';
    items.forEach(it => {
        const s = Calc.stockInfo(appData, it.name);
        const lv = Calc.stockLevel(it, s);
        const u = escapeHtml(it.unit || '');
        opts += `<option value="${escapeHtml(it.name)}">${escapeHtml(it.name)} (${u})</option>`;
        const sup = isOwner() ? supCardHtml(it, s, allEntries) : '';
        cards += `<div class="stk-card level-${lv}"><div class="stk-card-head"><span>📦 ${escapeHtml(it.name)} <small style="color:#64748b">(${u})</small></span>` +
            (lv === 'out' ? '<span class="stk-badge out">❌ শেষ</span>' : lv === 'low' ? `<span class="stk-badge low">⚠️ কম (${Calc.num(it.low)} বা কম)</span>` : '') + '</div>' +
            `<div class="stk-nums"><div><div class="n">${s.received}</div><div class="l">মোট তোলা</div></div>` +
            `<div><div class="n">${s.sold}</div><div class="l">মোট বিক্রি</div></div>` +
            `<div><div class="n rem">${s.remaining}</div><div class="l">এখন আছে</div></div></div>` +
            `<div class="stk-sub">💵 ${s.soldCash} নগদ · 📒 ${s.soldBaki} বাকি (${u})</div>${sup}</div>`;
    });

    let list = '';
    entries.forEach(e => {
        const it = itemOf(e.item);
        list += `<div class="stk-entry"><div class="se-main">${escapeHtml(e.dt || '')}<span class="se-item">${escapeHtml(e.item)}</span>` +
            `<div class="se-sub">👤 ${escapeHtml(e.byName || '—')}</div></div>` +
            `<div class="se-qty">+${Calc.num(e.qty)} <small>${escapeHtml((it && it.unit) || '')}</small></div>` +
            `<button onclick="delStockEntry('${escapeHtml(e.id)}')">ডিলিট</button></div>`;
    });

    let body;
    if (!items.length) {
        body = '<div class="section"><p style="text-align:center;color:#475569;padding:18px;background:#fff;border-radius:14px;line-height:1.7;font-size:13px">কোনো আইটেমে স্টক চালু নেই।<br>' +
            (isOwner() ? '<b>যোগ করুন</b> পেজে "আইটেম ম্যানেজ" খুলে নতুন আইটেমে "স্টক রাখুন" চালু করুন, অথবা পুরনো আইটেমের ✏️ বাটন চাপুন।' : 'মালিককে স্টক চালু করতে বলুন।') + '</p></div>';
    } else {
        body = `<div class="section">${isOwner() ? '<button class="sup-btn sup-rep sup-top" onclick="openSupPick()">📤 স্টকের হিসাব পাঠান</button>' : ''}${cards}</div>
            <div class="section"><div class="section-title"><span class="st-icon">➕</span> মাল তোলা (দোকানে উঠেছে)</div>
                <label>কোন আইটেম:</label><select id="stkItem">${opts}</select>
                <label>কত উঠলো:</label><input type="number" id="stkQty" inputmode="numeric" placeholder="যেমন: ৫০">
                <label>তারিখ:</label><input type="date" id="stkDate" value="${todayLocal()}">
                <button class="btn-primary" onclick="addStock()">✅ স্টকে যোগ করুন</button></div>
            <div class="section"><div class="section-title"><span class="st-icon">📋</span> মাল তোলার তালিকা</div>
                ${list || '<p style="text-align:center;color:#64748b;padding:16px;background:#fff;border-radius:14px;">এখনো কোনো মাল তোলা হয়নি</p>'}</div>`;
    }
    el.innerHTML = '<div class="page-hero"><span class="hdr-act hero"><span class="sync-dot" onclick="syncDotTap()" style="display:none"></span><span class="rf-btn" data-nt onclick="refreshAll(this)" title="Refresh">🔄</span><span class="lg-pill" data-nt onclick="toggleLang(event)" title="Language">' + langPillText() + '</span></span><div class="page-hero-icon">📦</div><h2 class="page-hero-title">স্টক</h2><p class="page-hero-sub">মাল তোলা, বিক্রি ও এখন কত আছে</p></div>' + body;
    const sel = document.getElementById('stkItem');
    if (sel && keepItem && names.includes(keepItem)) sel.value = keepItem;
    updateLowBadge();
}

// ---- সরবরাহকারীর হিসাব (মালিকের জন্য): বিক্রি হওয়া × দাম − দেওয়া টাকা ----
function supPriceAt(it, dt) {
    const hist = (it.supHist || []).slice().sort((a, b) => (a.from || '') < (b.from || '') ? -1 : 1);
    if (!hist.length) return Calc.num(it.supPrice);
    let p = Calc.num(hist[0].price);
    hist.forEach(x => { if (!x.from || (dt || '') >= x.from) p = Calc.num(x.price); });
    return p;
}
// দাম অনুযায়ী ভাগ: [{price, qty}] (তারিখ ধরে, একই দাম একসাথে)
function supSegs(it) {
    const seg = {}, order = [];
    const add = t => {
        if (!t || t.tp !== it.name) return;
        const q = Calc.num(t.qty); if (!(q > 0)) return;
        const p = supPriceAt(it, t.dt);
        if (!(p in seg)) { seg[p] = 0; order.push(p); }
        seg[p] += q;
    };
    (appData.customers || []).forEach(c => { (c.tx || []).forEach(add); (c.history || []).forEach(hh => (hh.tx || []).forEach(add)); });
    return order.map(p => ({ price: p, qty: Calc.r2(seg[p]) }));
}
function supInfo(it, s, entries) {
    const price = Calc.num(it.supPrice);
    const pays = entries.filter(e => e.kind === 'supPay' && e.item === it.name);
    const paid = Calc.r2(pays.reduce((a, e) => a + Calc.num(e.amt), 0));
    const segs = price > 0 ? supSegs(it) : [];
    const owed = Calc.r2(segs.reduce((a, x) => a + x.qty * x.price, 0));
    return { price, pays, paid, owed, segs, due: Calc.r2(owed - paid) };
}
function supCardHtml(it, s, entries) {
    const q = escapeHtml(it.name).replace(/'/g, "\\'");
    const rep = '';
    if (!(Calc.num(it.supPrice) > 0) && !it.supName) return '';
    const v = supInfo(it, s, entries), nm = escapeHtml(it.supName || 'সরবরাহকারী'), u = escapeHtml(it.unit || '');
    const noPrice = !(v.price > 0);
    const pays = v.pays.slice().sort((a, b) => (b.dt || '') < (a.dt || '') ? -1 : 1).map(e =>
        `<div class="sup-pay"><span>${escapeHtml(e.dt || '')} · 👤 ${escapeHtml(e.byName || '—')}</span><b>${Calc.r2(e.amt)} ৳</b><button onclick="delStockEntry('${escapeHtml(e.id)}')">✖</button></div>`).join('');
    if (noPrice) return `<div class="sup-box"><div class="sup-head">🤝 ${nm}</div>` +
        `<div class="sup-row"><span>${nm}কে দিয়েছেন</span><b style="color:#16a34a">${v.paid} ৳</b></div>` +
        pays + rep + `<button class="sup-btn" onclick="openSupPay('${escapeHtml(it.name).replace(/'/g, "\\'")}')">💸 ${nm}কে টাকা দিলাম</button></div>`;
    return `<div class="sup-box"><div class="sup-head">🤝 ${nm} <small>(প্রতি ${u} ${v.price} ৳)</small></div>` +
        (v.segs.length > 1 ? v.segs.map(x => `<div class="sup-row"><span>বিক্রি হয়েছে ${x.qty} ${u} × ${x.price}</span><b>${Calc.r2(x.qty * x.price)} ৳</b></div>`).join('') : `<div class="sup-row"><span>বিক্রি হয়েছে ${s.sold} ${u} × ${v.price}</span><b>${v.owed} ৳</b></div>`) +
        `<div class="sup-row"><span>${nm}কে দিয়েছেন</span><b style="color:#16a34a">${v.paid} ৳</b></div>` +
        `<div class="sup-row sup-due"><span>${v.due >= 0 ? nm + 'কে আর দিতে হবে' : nm + ' বেশি পেয়েছেন'}</span><b>${Math.abs(v.due)} ৳</b></div>` +
        pays + rep + `<button class="sup-btn" onclick="openSupPay('${escapeHtml(it.name).replace(/'/g, "\\'")}')">💸 ${nm}কে টাকা দিলাম</button></div>`;
}
// ---- সরবরাহকারীকে পাঠানোর হিসাব: কত মাল দিয়েছে/বিক্রি/আছে, কতজন নগদ-বাকি, কত দিতে হবে ----
function supBlock(it) {
    const name = it.name, u = it.unit || '', price = Calc.num(it.supPrice), n2 = Calc.r2;
    const entries = appData.stock.entries.filter(e => e.item === name && e.kind !== 'supPay').sort((a, b) => (a.dt || '') < (b.dt || '') ? -1 : 1);
    const s = Calc.stockInfo(appData, name);
    let cashAmt = 0, bakiColl = 0, bakiPend = 0, nCash = 0, nBakiPaid = 0, nBakiPend = 0;
    (appData.customers || []).forEach(c => {
        const txs = (c.tx || []).concat((c.history || []).reduce((a, h) => a.concat(h.tx || []), [])).filter(t => t && t.tp === name);
        if (!txs.length) return;
        const cash = txs.filter(Calc.isCash).reduce((a, t) => a + Calc.num(t.amt), 0);
        const baki = txs.filter(t => !Calc.isCash(t)).reduce((a, t) => a + Calc.num(t.amt), 0);
        if (cash > 0) { cashAmt += cash; nCash++; }
        if (baki > 0) {
            const due = Calc.totals(c).due;
            if (due <= 0) { bakiColl += baki; nBakiPaid++; } else { bakiPend += Math.min(baki, due); bakiColl += Math.max(0, baki - due); nBakiPend++; }
        }
    });
    const pays = appData.stock.entries.filter(e => e.item === name && e.kind === 'supPay');
    const paid = n2(pays.reduce((a, e) => a + Calc.num(e.amt), 0));
    const sup = it.supName || 'সরবরাহকারী';
    let m = `━━━━━━━━━━\n📦 ${name}${it.supName ? ' — ' + it.supName : ''}\n━━━━━━━━━━\n`;
    m += '📥 মাল পেয়েছি:\n' + (entries.map(e => `- ${e.dt}: ${Calc.num(e.qty)} ${u}`).join('\n') || '- নেই') + `\n🔹 মোট পেয়েছি: ${s.received} ${u}\n\n`;
    m += `🛒 বিক্রি হয়েছে: ${s.sold} ${u}\n- 💵 নগদে: ${s.soldCash} ${u}\n- 📒 বাকিতে: ${s.soldBaki} ${u}\n📦 এখন আছে: ${s.remaining} ${u}\n\n`;
    m += `👥 কাস্টমার:\n- নগদে নিয়েছে: ${nCash} জন (${n2(cashAmt)} টাকা)\n- বাকিতে নিয়ে টাকা দিয়েছে: ${nBakiPaid} জন\n- বাকি আছে: ${nBakiPend} জন (${n2(bakiPend)} টাকা)\n🔹 এ পর্যন্ত আদায়: ${n2(cashAmt + bakiColl)} টাকা\n`;
    if (price > 0) {
        const sg = supSegs(it), owed = n2(sg.reduce((a, x) => a + x.qty * x.price, 0));
        m += `\n💰 ${sup}কে দিতে হবে:\n` + (sg.length > 1 ? sg.map(x => `- বিক্রি ${x.qty} ${u} × ${x.price} = ${n2(x.qty * x.price)} টাকা`).join('\n') + '\n' : `- বিক্রি ${s.sold} ${u} × ${price} = ${owed} টাকা\n`) + `- এ পর্যন্ত দিয়েছি: ${paid} টাকা\n🔹 বাকি: ${n2(owed - paid)} টাকা`;
        if (pays.length) m += '\n' + pays.sort((a, b) => (a.dt || '') < (b.dt || '') ? -1 : 1).map(e => `  · ${e.dt}: ${Calc.r2(e.amt)} টাকা`).join('\n');
    }
    return { text: m, due: price > 0 ? n2(supSegs(it).reduce((a, x) => a + x.qty * x.price, 0) - paid) : null };
}
function supReportText(items) { return docGen(() => supReportText0(items)); }
function supReportText0(items) {
    const bl = items.map(supBlock);
    let m = (appData.shop && appData.shop.name ? '🏪 ' + appData.shop.name + '\n' : '') + `📋 স্টকের হিসাব\n📅 ${formatDateBn(todayLocal())}\n\n` + bl.map(b => b.text).join('\n\n');
    const withDue = bl.filter(b => b.due !== null);
    if (withDue.length > 1) m += `\n\n💰 সব মিলিয়ে মোট বাকি: ${Calc.r2(withDue.reduce((a, b) => a + b.due, 0))} টাকা`;
    return m;
}
let supRepItem = '';
function openSupPick() {
    if (!isOwner()) return showEmployeeLockedMsg();
    const items = Calc.stockItems(appData);
    if (!items.length) return alert('কোনো আইটেমে স্টক চালু নেই');
    document.getElementById('supPickList').innerHTML = items.map(it => {
        const st = Calc.stockInfo(appData, it.name), u = escapeHtml(it.unit || '');
        return `<label class="pk"><input type="checkbox" class="sp-chk" value="${escapeHtml(it.name)}" checked> ${escapeHtml(it.name)} <small>তোলা ${st.received} · বিক্রি ${st.sold} · আছে ${st.remaining} ${u}</small></label>`;
    }).join('');
    openModal('supPickModal');
}
function supPickGo() {
    const names = [...document.querySelectorAll('#supPickList .sp-chk:checked')].map(c => c.value);
    if (!names.length) return alert('অন্তত একটা আইটেম বাছুন');
    const items = names.map(itemOf).filter(Boolean);
    closeModal('supPickModal');
    document.getElementById('supRepTitle').textContent = '📤 ' + names.join(', ');
    document.getElementById('supRepText').value = supReportText(items);
    openModal('supReportModal');
}
function supRepCopy() {
    const t = document.getElementById('supRepText').value;
    if (window.AndroidApp && AndroidApp.copyText) AndroidApp.copyText(t);
    else if (navigator.clipboard) navigator.clipboard.writeText(t).catch(() => {});
    alert('📋 হিসাব কপি হয়েছে');
}
function supRepWa() { window.open('https://wa.me/?text=' + encodeURIComponent(document.getElementById('supRepText').value), '_blank'); }
let supPayItem = '';
function openSupPay(name) {
    if (!isOwner()) return showEmployeeLockedMsg();
    const it = itemOf(name); if (!it) return;
    supPayItem = name;
    document.getElementById('supPayTitle').textContent = '💸 ' + (it.supName || 'সরবরাহকারী') + 'কে টাকা দিলাম';
    document.getElementById('supPayAmt').value = '';
    document.getElementById('supPayDate').value = todayLocal();
    document.getElementById('supPayErr').style.display = 'none';
    openModal('supPayModal');
}
function saveSupPay() {
    const amt = Calc.r2(Calc.num(document.getElementById('supPayAmt').value)), dt = document.getElementById('supPayDate').value;
    const err = document.getElementById('supPayErr');
    if (!(amt > 0)) { err.textContent = '❌ কত টাকা দিলেন লিখুন'; err.style.display = 'block'; return; }
    if (!dt) { err.textContent = '❌ তারিখ বাছুন'; err.style.display = 'block'; return; }
    const name = supPayItem, it = itemOf(name);
    requestTransactionPin('🔐 সরবরাহকারীকে টাকা', `💸 ${(it && it.supName) || ''} — ${amt} টাকা`, function() {
        appData.stock.entries.push({ id: uid(), kind: 'supPay', item: name, dt: dt, qty: 0, amt: amt, at: now(), byName: currentUser.name, byRole: currentUser.role, byId: currentUser.id });
        save(); closeModal('supPayModal'); renderStock();
    });
}

function addStock() {
    const name = document.getElementById('stkItem').value;
    const item = itemOf(name);
    const q = Calc.num(document.getElementById('stkQty').value);
    const dt = document.getElementById('stkDate').value;
    if (!item || !item.stock) return alert('আইটেম বেছে নিন');
    if (!q || q <= 0) return alert('কত ' + (item.unit || '') + ' উঠলো লিখুন');
    if (!dt) return alert('তারিখ নির্বাচন করুন');
    requestTransactionPin('🔐 মাল তোলা নিশ্চিত করুন', `📦 ${name} +${q} ${item.unit || ''}`, function() {
        appData.stock.entries.push({ id: uid(), item: name, dt: dt, qty: q, at: now(), byName: currentUser.name, byRole: currentUser.role, byId: currentUser.id });
        save();
        renderStock();
    });
}

function delStockEntry(id) {
    requestTransactionPin('🔐 রেকর্ড ডিলিট', 'এই রেকর্ডটি মুছে যাবে', function() {
        const old = appData.stock.entries.find(e => e.id === id);
        if (old) logDelete(old.kind === 'supPay' ? 'supPay' : 'stock', null, { item: old.item || STOCK_ITEM, qty: old.qty, amt: old.amt, dt: old.dt, origBy: old.byName || '' });
        appData.stock.entries = appData.stock.entries.filter(e => e.id !== id);
        save();
        renderStock();
    });
}

// ================== 12. ডিলিট লগ — কে, কখন, কী ডিলিট করল (শুধু মালিক দেখেন) ==================
function logDelete(kind, cus, extra) {
    appData.deleteLog.push(Object.assign({
        id: uid(), at: now(), kind: kind,
        byName: currentUser.name, byRole: currentUser.role, byId: currentUser.id,
        customerId: cus ? (cus.id || null) : null, customerName: cus ? cus.name : ''
    }, extra || {}));
    if (appData.deleteLog.length > 500) appData.deleteLog.splice(0, appData.deleteLog.length - 500);
}

function fmtTime(iso) {
    try { return new Date(iso).toLocaleString(LANG === 'en' ? 'en-GB' : 'bn-BD', { day: 'numeric', month: 'long', hour: 'numeric', minute: '2-digit' }); }
    catch (e) { return iso; }
}

function logText(e) {
    if (e.kind === 'tx') return 'বিল: ' + txLabel({ tp: e.item, qty: e.qty }).text + ' — ' + e.amt + ' ৳ (' + (e.pay === 'cash' ? '💵 নগদ' : '📒 বাকি') + ') · তারিখ ' + e.dt;
    if (e.kind === 'payment') return 'জমা: ' + e.amt + ' ৳ · তারিখ ' + e.dt;
    if (e.kind === 'supPay') return 'সরবরাহকারীকে দেওয়া টাকা: ' + (e.item || '') + ' — ' + e.amt + ' ৳ · তারিখ ' + e.dt;
    if (e.kind === 'stock') return 'স্টকে মাল তোলা: ' + (e.item || STOCK_ITEM) + ' ' + e.qty + ' ' + (unitOf(e.item || STOCK_ITEM) || 'কার্টুন') + ' · তারিখ ' + e.dt;
    if (e.kind === 'customer') return 'পুরো কাস্টমার অ্যাকাউন্ট (বাকি ছিল ' + e.due + ' ৳, ' + e.txCount + 'টি বিল)';
    return '';
}

function purgeOldLogs() {
    const d = appData.logKeepDays || 0;
    if (!d || !Array.isArray(appData.deleteLog)) return;
    const cut = Date.now() - d * 86400000, before = appData.deleteLog.length;
    appData.deleteLog = appData.deleteLog.filter(e => { const t = Date.parse(e.at); return isNaN(t) || t >= cut; });
    if (appData.deleteLog.length !== before) save();
}
function setLogKeep() {
    appData.logKeepDays = +document.getElementById('dlKeep').value || 0;
    save();
    purgeOldLogs();
    openDeleteLog();
}
function openDeleteLog() {
    if (!isOwner()) return alert('🔒 ডিলিট লগ শুধু মালিক দেখতে পারেন।');
    purgeOldLogs();
    document.getElementById('dlKeep').value = String(appData.logKeepDays || 0);
    const log = appData.deleteLog.slice().reverse();
    let h = '';
    if (!log.length) h = '<p style="text-align:center;color:#64748b;padding:20px;font-style:italic">এখনো কিছু ডিলিট হয়নি।<br><small>(এই ফিচার চালুর আগের ডিলিটের রেকর্ড নেই)</small></p>';
    log.forEach(e => {
        const role = e.byRole === 'owner' ? 'মালিক' : 'স্টাফ';
        const target = (e.kind === 'stock' || e.kind === 'supPay') ? 'স্টক' : escapeHtml(e.customerName || '—');
        h += `<div class="dl-item"><div class="dl-top"><span>🗑️ ${escapeHtml(e.byName || '—')}<span class="dl-who">${role}</span></span><span class="dl-time">${escapeHtml(fmtTime(e.at))}</span></div>` +
            `<div class="dl-body"><b>${target}</b> — ${escapeHtml(logText(e))}` +
            (e.origBy ? `<br><span style="color:#64748b">এন্ট্রি করেছিলেন: ${escapeHtml(e.origBy)}</span>` : '') + '</div></div>';
    });
    document.getElementById('deleteLogBody').innerHTML = h;
    openModal('deleteLogModal');
}

// কাস্টমার কার্ডে (শুধু মালিক) সর্বশেষ ৩টি ডিলিট দেখানো
function deleteNoteHtml(cus) {
    if (!isOwner() || !cus.id) return '';
    const items = appData.deleteLog.filter(e => e.customerId === cus.id && (e.kind === 'tx' || e.kind === 'payment'));
    if (!items.length) return '';
    let h = `🗑️ <b>ডিলিট হয়েছে (${items.length}টি):</b>`;
    items.slice(-3).reverse().forEach(e => {
        h += `<br>• <b>${escapeHtml(e.byName || '—')}</b> — ${escapeHtml(logText(e).replace(/ · তারিখ .*/, ''))} <span style="color:#64748b">(${escapeHtml(fmtTime(e.at))})</span>`;
    });
    h += '<br><span class="dn-more" onclick="openDeleteLog()">সব লগ দেখুন</span>';
    return `<div class="del-note">${h}</div>`;
}
// ================== 13. কিবোর্ড ফিক্স — সব ইনপুটে (পেজ, মডাল, লগইন, সেটআপ) ==================
// - ফোনে কিবোর্ড ওপরে ভেসে ওঠে, তাই মডাল/লগইন/সেটআপকে দৃশ্যমান অংশের মাপে বসানো হয় (বাটন ঢাকা পড়ে না)
// - ইনপুটে ট্যাপ করলে নিজে স্ক্রল হয়ে ইনপুটটা উপরের দিকে আসে
function setupKeyboardFix() {
    const vv = window.visualViewport;
    const BOX_SEL = '.modal-overlay, .login-screen, .setup-screen';
    let raf = 0;

    function metrics() {
        const h = vv ? vv.height : window.innerHeight;
        const top = vv ? vv.offsetTop : 0;
        return { h: h, top: top, kb: Math.max(0, window.innerHeight - h - top) };
    }
    function isField(el) { return !!el && /^(INPUT|SELECT|TEXTAREA)$/.test(el.tagName); }

    function scrollParent(el) {
        for (let p = el.parentElement; p && p !== document.body && p !== document.documentElement; p = p.parentElement) {
            const oy = getComputedStyle(p).overflowY;
            if ((oy === 'auto' || oy === 'scroll') && p.scrollHeight > p.clientHeight + 1) return p;
        }
        return null;
    }

    // ইনপুট দৃশ্যমান অংশের উপরের ~অর্ধেকে না থাকলে স্ক্রল করে উপরের দিকে আনে
    function ensureVisible(el) {
        if (!isField(el) || el.type === 'hidden') return;
        const m = metrics();
        const r = el.getBoundingClientRect();
        const zoneTop = m.top + 12, zoneBottom = m.top + m.h * 0.55;
        if (r.top >= zoneTop && r.bottom <= zoneBottom) return;
        const delta = r.top - (m.top + Math.min(90, m.h * 0.2));
        const sp = scrollParent(el);
        if (sp) sp.scrollBy({ top: delta, behavior: 'instant' });
        else window.scrollBy({ top: delta, behavior: 'instant' });
    }

    function layout() {
        raf = 0;
        const m = metrics();
        const open = m.kb > 80;
        if (document.body.classList.contains('kb-open') !== open) document.body.classList.toggle('kb-open', open);
        document.documentElement.style.setProperty('--kb', open ? m.kb + 'px' : '0px');

        document.querySelectorAll(BOX_SEL).forEach(box => {
            const active = box.classList.contains('active') && box.style.display !== 'none';
            const card = box.querySelector('.modal-card, .setup-card');
            if (open && active) {
                box.style.top = m.top + 'px';
                box.style.height = m.h + 'px';
                box.style.bottom = 'auto';
                if (card) card.style.maxHeight = Math.max(160, m.h - (box.classList.contains('modal-overlay') ? 40 : 24)) + 'px';
            } else {
                box.style.top = ''; box.style.height = ''; box.style.bottom = '';
                if (card) card.style.maxHeight = '';
            }
        });
        if (open && isField(document.activeElement)) ensureVisible(document.activeElement);
    }
    function schedule() { if (!raf) raf = requestAnimationFrame(layout); }

    if (vv) { vv.addEventListener('resize', schedule); vv.addEventListener('scroll', schedule); }
    window.addEventListener('resize', schedule);
    new MutationObserver(schedule).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['class'] });

    document.addEventListener('focusin', e => {
        const t = e.target;
        if (!isField(t)) return;
        schedule();
        [80, 300, 600, 1000].forEach(ms => {
            setTimeout(() => { if (document.activeElement === t) ensureVisible(t); }, ms);
        });
    });
    document.addEventListener('focusout', () => setTimeout(schedule, 150));
}

// ================== 14. চালু করা (boot) ==================
// পেজের যেকোনো জায়গায় ক্লিক: খোলা মেনু/তালিকা বন্ধ করা
function onDocumentClick(e) {
    const t = e.target;
    if (!t.closest('.app-bar-right')) closeUserMenu();
    const im = document.getElementById('itemManager');
    if (im && im.classList.contains('open') && !t.closest('#itemManager') && !t.closest('.modal-overlay')) im.classList.remove('open');
    if (!t.closest('.history-btn') && !t.closest('.history-section')) {
        document.querySelectorAll('.history-section.show').forEach(s => s.classList.remove('show'));
    }
    if (!t.closest('.add-box') && !t.closest('.cc-toggle-btn')) {
        document.querySelectorAll('.add-box').forEach(b => b.style.display = 'none');
    }
    if (!t.closest('.photo-menu') && !t.closest('.cc-photo-btn')) {
        document.querySelectorAll('.photo-menu').forEach(m => m.classList.remove('show'));
    }
    if (!t.closest('.search-wrapper')) {
        const ac = document.getElementById('autocompleteList');
        if (ac) ac.style.display = 'none';
    }
}


// ================== স্টাফকে নোটিশ ==================
// মালিক লেখেন → স্টাফের হোম পেজে দেখায়। স্টাফ "বন্ধ করুন" চাপলে শুধু তার কাছ থেকে সরে যায়।
// মালিক চাইলে নোটিশ বন্ধ/চালু বা মুছতে পারেন। সব স্টাফকে বা নির্দিষ্ট একজনকে দেওয়া যায়।
function myNotices() {
    const me = currentUser;
    if (!me || me.role !== 'employee') return [];
    return appData.notices.filter(n => n.active && (n.to === 'all' || n.to === me.id) && !(n.done && n.done[me.id]));
}
function renderNotices() {
    const box = document.getElementById('noticeBox');
    if (!box) return;
    const list = myNotices();
    box.innerHTML = list.map(n => `<div class="notice-card"><div class="nc-head"><span>📢 ${escapeHtml(n.byName || 'মালিক')}-এর নোটিশ</span><small>${escapeHtml(fmtTime(n.at))}</small></div>` +
        `<div class="nc-text">${escapeHtml(n.text)}</div><button class="nc-close" onclick="dismissNotice('${n.id}')">✖ পড়েছি, বন্ধ করুন</button></div>`).join('');
    box.style.display = list.length ? 'block' : 'none';
}
function dismissNotice(id) {
    const n = appData.notices.find(x => x.id === id);
    if (!n || !currentUser) return;
    n.done = n.done || {};
    n.done[currentUser.id] = now();
    save();
    renderNotices();
}
function noticeToLabel(n) {
    if (n.to === 'all') return 'সব স্টাফ';
    const e = appData.employees.find(x => x.id === n.to);
    return e ? e.name : '(মুছে ফেলা স্টাফ)';
}
function openNoticeAdmin() {
    const sel = document.getElementById('noticeTo');
    sel.innerHTML = '<option value="all">👥 সব স্টাফ</option>' + appData.employees.map(e => `<option value="${e.id}">👤 ${escapeHtml(e.name)}</option>`).join('');
    document.getElementById('noticeText').value = '';
    document.getElementById('noticeError').style.display = 'none';
    renderNoticeList();
    openModal('noticeModal');
}
function sendNotice() {
    const text = document.getElementById('noticeText').value.trim(), err = document.getElementById('noticeError');
    if (!text) { err.textContent = '❌ নোটিশ লিখুন'; err.style.display = 'block'; return; }
    err.style.display = 'none';
    appData.notices.push({ id: uid(), text: text.slice(0, 600), to: document.getElementById('noticeTo').value, at: now(), byName: currentUser.name, active: true, done: {} });
    save();
    document.getElementById('noticeText').value = '';
    renderNoticeList();
}
function toggleNotice(id) {
    const n = appData.notices.find(x => x.id === id);
    if (!n) return;
    n.active = !n.active;
    if (n.active) n.done = {};          // আবার চালু করলে সবার কাছে নতুন করে আসে
    save();
    renderNoticeList();
}
function deleteNotice(id) {
    if (!confirm('এই নোটিশ মুছে ফেলবেন?')) return;
    const k = appData.notices.findIndex(x => x.id === id);
    if (k >= 0) appData.notices.splice(k, 1);
    save();
    renderNoticeList();
}
function renderNoticeList() {
    const el = document.getElementById('noticeList');
    if (!appData.notices.length) { el.innerHTML = '<p class="pdf-note" style="text-align:center">এখনো কোনো নোটিশ নেই</p>'; return; }
    el.innerHTML = appData.notices.slice().reverse().map(n => {
        const targets = n.to === 'all' ? appData.employees : appData.employees.filter(e => e.id === n.to);
        const closed = targets.filter(e => n.done && n.done[e.id]).map(e => e.name);
        return `<div class="nt-item ${n.active ? '' : 'off'}"><div class="nt-meta">${escapeHtml(fmtTime(n.at))} · ${escapeHtml(noticeToLabel(n))}</div>` +
            `<div class="nt-text">${escapeHtml(n.text)}</div>` +
            `<div class="nt-meta">${n.active ? '🔔 চালু' : '🔕 বন্ধ'}${closed.length ? ' · বন্ধ করেছে: ' + escapeHtml(closed.join(', ')) : ''}</div>` +
            `<div class="nt-actions"><button onclick="toggleNotice('${n.id}')">${n.active ? '🔕 বন্ধ রাখুন' : '🔔 চালু করুন'}</button><button onclick="deleteNotice('${n.id}')">🗑️ মুছুন</button></div></div>`;
    }).join('');
}


// ================== 14. ক্লাউড সিঙ্ক (Firebase) ==================
// মালিক চালু করলে একটা "দোকান কোড" পায়। স্টাফ নতুন ফোনে সেই কোড দিলে সব ডেটা নেমে আসে,
// তারপর নিজের ইউজারনেম-পাসওয়ার্ডে ঢোকে। ফোনে ডেটা থাকে, তাই নেট না থাকলেও কাজ চলে।
// Firebase-এর লাইব্রেরি লাগে না — সরাসরি REST (ফাইল/অ্যাপ দুই জায়গাতেই চলে)।
const FB = { apiKey: 'AIzaSyB7DEynloD4oURQxEspaQKx0vbdzHx9K8s', projectId: 'baki-khata-6066d' };
const CODE_CHARS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
var CS = null;                       // এই ফোনের সিঙ্ক অবস্থা (var: save() শুরুতেই ডাকলেও ভুল হয় না)
let csBusy = false, csAgain = false, csDeb = null, csAsked = false;

function loadCS() { try { return JSON.parse(localStorage.getItem('bkSync')) || null; } catch (e) { return null; } }
function saveCS() { try { if (CS) localStorage.setItem('bkSync', JSON.stringify(CS)); else localStorage.removeItem('bkSync'); } catch (e) {} }
function randomCode(n) {
    const a = new Uint8Array(n);
    if (window.crypto && crypto.getRandomValues) crypto.getRandomValues(a); else for (let i = 0; i < n; i++) a[i] = Math.floor(Math.random() * 256);
    return Array.from(a).map(x => CODE_CHARS[x % CODE_CHARS.length]).join('');
}
const cleanCode = s => String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
const prettyCode = c => (c.match(/.{1,4}/g) || []).join('-');
function hashStr(str) {              // দ্রুত হ্যাশ (বদল ধরার জন্য)
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) { const ch = str.charCodeAt(i); h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677); }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36) + '.' + str.length;
}

// ---- Firebase Auth ----
function cloudErr(e) {
    const m = String((e && e.message) || e);
    if (/INVALID_LOGIN_CREDENTIALS|EMAIL_NOT_FOUND|INVALID_PASSWORD/.test(m)) return 'কোড ভুল';
    if (/OPERATION_NOT_ALLOWED|PASSWORD_LOGIN_DISABLED/.test(m)) return 'Firebase-এ Email/Password লগইন চালু নেই';
    if (/TOKEN_EXPIRED|USER_DISABLED|USER_NOT_FOUND|INVALID_REFRESH_TOKEN|CREDENTIAL_TOO_OLD/.test(m)) return 'KEY_CHANGED';
    if (/TOO_MANY_ATTEMPTS/.test(m)) return 'অনেকবার চেষ্টা হয়েছে, একটু পরে আবার দিন';
    if (/PERMISSION_DENIED|403/.test(m)) return 'Firestore-এর নিরাপত্তা নিয়ম (rules) ঠিক করা নেই';
    if (/Failed to fetch|NetworkError|Load failed|network/i.test(m)) return 'ইন্টারনেট নেই বা সংযোগ আটকে আছে';
    return m.slice(0, 120);
}
async function authCall(kind, body) {
    const r = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:' + kind + '?key=' + FB.apiKey, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error((j.error && j.error.message) || ('HTTP ' + r.status));
    return j;
}
function setAuth(j) {
    CS.idToken = j.idToken || j.id_token; CS.refresh = j.refreshToken || j.refresh_token; CS.uid = j.localId || j.user_id;
    CS.exp = Date.now() + (parseInt(j.expiresIn || j.expires_in, 10) || 3600) * 1000;
}
async function getToken() {
    if (CS.idToken && CS.exp - 60000 > Date.now()) return CS.idToken;
    const r = await fetch('https://securetoken.googleapis.com/v1/token?key=' + FB.apiKey, {
        method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(CS.refresh) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error((j.error && j.error.message) || ('HTTP ' + r.status));
    setAuth(j); saveCS();
    return CS.idToken;
}
const shopEmail = id => id.toLowerCase() + '@baki-khata.app';

// ---- Firestore (REST) ----
function fsBase() { return 'https://firestore.googleapis.com/v1/projects/' + FB.projectId + '/databases/(default)/documents'; }
async function fsPost(url, body) {
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + await getToken() }, body: JSON.stringify(body) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error((j.error && (j.error.status || j.error.message)) || ('HTTP ' + r.status));
    return j;
}

// ---- কোন ডেটা কোন ডকুমেন্টে ----
function cloudDocs() {   // docId → JSON লেখা
    const out = {};
    const meta = Object.assign({}, appData, { customers: undefined, deleteLog: undefined, stock: Object.assign({}, appData.stock, { entries: undefined }) });
    out.meta = JSON.stringify(meta);
    appData.customers.forEach(c => {
        let j = JSON.stringify(c);
        if (j.length > 900000) j = JSON.stringify(Object.assign({}, c, { photo: null }));   // ছবি বড় হলে বাদ (১MB সীমা)
        out['c_' + c.id] = j;
    });
    appData.stock.entries.forEach(e => { if (e.id) out['s_' + e.id] = JSON.stringify(e); });
    appData.deleteLog.forEach(e => { if (e.id) out['l_' + e.id] = JSON.stringify(e); });
    appData.notices.forEach(e => { if (e.id) out['n_' + e.id] = JSON.stringify(e); });
    return out;
}
function mergeCustomer(l, r) {       // একই কাস্টমারে দুই ফোনে একসাথে এন্ট্রি হলে দুটোই রাখে
    const gone = new Set([].concat(l.gone || [], r.gone || []));
    const uni = (a, b) => {
        const seen = new Set(), res = [];
        [].concat(a || [], b || []).forEach(x => { const k = x.id || JSON.stringify(x); if (seen.has(k) || (x.id && gone.has(x.id))) return; seen.add(k); res.push(x); });
        return res;
    };
    const out = Object.assign({}, r, l);
    out.tx = uni(l.tx, r.tx); out.payment = uni(l.payment, r.payment); out.history = uni(l.history, r.history);
    out.gone = Array.from(gone).slice(-600);
    out.nameChanges = Math.max(l.nameChanges || 0, r.nameChanges || 0);
    return out;
}
function uiBusy() {
    const a = document.activeElement;
    if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return true;
    return !!document.querySelector('.modal-overlay.active:not(#cloudModal):not(#cloudJoinModal)');
}
function applyRemote(docs) {          // ফেরত: স্ক্রিন নতুন করে আঁকা লাগবে কি না
    let changed = false;
    const sorted = docs.slice().sort((a, b) => (a.id === 'meta' ? -1 : b.id === 'meta' ? 1 : 0));
    const local = cloudDocs();
    sorted.forEach(({ id, d }) => {
        const rh = d ? hashStr(d) : 'DEL';
        if (CS.h[id] === rh) return;                         // নিজেরই পাঠানো/আগেই মেলানো
        // dirty = এই ফোনে এমন বদল আছে যা এখনো ক্লাউডে যায়নি। আগে কখনো মেলানো না হলে: নতুন (সেটআপ হয়নি) ফোনের meta ক্লাউডেরটাই নেয়
        const dirty = !(id in local) ? false : CS.h[id] === undefined ? (id === 'meta' ? !!appData.setupDone : true) : CS.h[id] !== hashStr(local[id]);
        if (id === 'meta') {
            if (dirty || !d) return;                          // এখানে লোকালটাই জেতে
            const o = JSON.parse(d), entries = appData.stock.entries;
            Object.keys(o).forEach(k => { if (k !== 'customers' && k !== 'deleteLog') appData[k] = o[k]; });
            appData.stock = Object.assign({}, o.stock || {}, { entries });
            CS.h.meta = rh; changed = true; return;
        }
        const kind = id[0], rid = id.slice(2);
        const arr = kind === 'c' ? appData.customers : kind === 's' ? appData.stock.entries : kind === 'n' ? appData.notices : appData.deleteLog;
        const k = arr.findIndex(x => x.id === rid);
        if (!d) { if (k >= 0) arr.splice(k, 1); CS.h[id] = 'DEL'; changed = true; return; }   // অন্য ফোনে মুছেছে
        const o = JSON.parse(d);
        if (k < 0) { arr.push(o); CS.h[id] = rh; changed = true; return; }
        if (!dirty) { arr[k] = o; CS.h[id] = rh; changed = true; return; }
        if (kind === 'c') { arr[k] = mergeCustomer(arr[k], o); changed = true; }
        else if (kind === 'n') { arr[k] = Object.assign({}, o, arr[k], { done: Object.assign({}, o.done, arr[k].done) }); changed = true; }   // কে কে বন্ধ করেছে — দুদিকের মিলিয়ে          // দুই দিকেই বদল — মিলিয়ে নেয়, পরের ধাপে পাঠায়
    });
    appData.deleteLog.sort((a, b) => (a.at < b.at ? -1 : a.at > b.at ? 1 : 0));
    return changed;
}

async function cloudPull(force) {
    if (!force && uiBusy()) return;
    const q = { from: [{ collectionId: 'docs' }], orderBy: [{ field: { fieldPath: 'u' }, direction: 'ASCENDING' }] };
    if (CS.lastU) q.where = { fieldFilter: { field: { fieldPath: 'u' }, op: 'GREATER_THAN', value: { timestampValue: CS.lastU } } };
    const res = await fsPost(fsBase() + '/shops/' + CS.uid + ':runQuery', { structuredQuery: q });
    const docs = []; let maxU = CS.lastU || '';
    (res || []).forEach(x => {
        if (!x.document) return;
        const f = x.document.fields || {};
        const id = x.document.name.split('/').pop();
        docs.push({ id, d: f.d ? f.d.stringValue || '' : '' });
        const u = f.u && f.u.timestampValue; if (u && u > maxU) maxU = u;
    });
    if (docs.length && applyRemote(docs)) {
        try { localStorage.setItem('bakiKhata', JSON.stringify(appData)); } catch (e) {}
        cloudRefreshUI();
    }
    CS.lastU = maxU;
}
async function cloudPush() {
    const cur = cloudDocs(), writes = [];
    Object.keys(cur).forEach(id => { const h = hashStr(cur[id]); if (CS.h[id] !== h) writes.push({ id, d: cur[id], h }); });
    Object.keys(CS.h).forEach(id => { if (!(id in cur) && CS.h[id] !== 'DEL') writes.push({ id, d: '', h: 'DEL' }); });
    const base = 'projects/' + FB.projectId + '/databases/(default)/documents/shops/' + CS.uid + '/docs/';
    for (let i = 0; i < writes.length; i += 200) {
        const part = writes.slice(i, i + 200);
        await fsPost(fsBase() + ':commit', { writes: part.map(w => ({
            update: { name: base + w.id, fields: { d: { stringValue: w.d } } },
            updateMask: { fieldPaths: ['d'] },
            updateTransforms: [{ fieldPath: 'u', setToServerValue: 'REQUEST_TIME' }]
        })) });
        part.forEach(w => { CS.h[w.id] = w.h; });
        saveCS();
    }
}
async function syncNow(manual) {
    if (!CS || CS.needKey) return;
    if (csBusy) { csAgain = true; return; }
    csBusy = true; cloudUpdateText();
    try {
        await cloudPull(manual === true);
        await cloudPush();
        CS.last = Date.now(); CS.err = '';
    } catch (e) {
        const m = cloudErr(e);
        if (m === 'KEY_CHANGED') { CS.needKey = true; CS.err = 'দোকান কোড বদলে গেছে'; } else CS.err = m;
    }
    saveCS(); csBusy = false; cloudUpdateText();
    if (CS.needKey && !csAsked) { csAsked = true; alert('☁️ দোকানের কোড বদলানো হয়েছে। নতুন কোড দিয়ে আবার যুক্ত হন।'); openCloudJoin(); }
    if (csAgain) { csAgain = false; setTimeout(syncNow, 500); }
}
function scheduleSync() {
    if (!CS || CS.needKey) return;
    clearTimeout(csDeb); csDeb = setTimeout(syncNow, 2500);
}
function cloudRefreshUI() {
    refreshWaRow(); refreshDocLangRow();
    try {
        if (currentUser && currentUser.viewer) { renderViewer(); return; }
        if (currentUser) { filterCustomers(); renderReports(); updateRemindBar(); updateLowBadge(); renderItemChips(); renderNotices(); }
        else renderShopName();
    } catch (e) {}
}
function cloudInit() {
    CS = loadCS();
    cloudUpdateText();
    if (!CS) return;
    setInterval(() => { if (!document.hidden) syncNow(); }, 45000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) syncNow(); });
    window.addEventListener('online', () => syncNow());
    setTimeout(syncNow, 800);
}

// ---- চালু করা / যুক্ত হওয়া ----
async function cloudCreate() {
    const shopId = randomCode(8), key = randomCode(12);
    const j = await authCall('signUp', { email: shopEmail(shopId), password: key, returnSecureToken: true });
    CS = { shopId, code: shopId + key, h: {}, lastU: '', last: 0, err: '', needKey: false };
    setAuth(j); saveCS();
    await syncNow(true);
    if (CS.err) throw new Error(CS.err);
    cloudInit();
}
async function cloudJoin(codeRaw) {
    const c = cleanCode(codeRaw);
    if (c.length !== 20) throw new Error('কোড ২০ অক্ষরের হতে হবে');
    const shopId = c.slice(0, 8), key = c.slice(8);
    const j = await authCall('signInWithPassword', { email: shopEmail(shopId), password: key, returnSecureToken: true });
    const rekey = !!CS;
    if (!rekey) CS = { shopId, h: {}, lastU: '', last: 0, err: '', needKey: false };
    if (rekey && CS.shopId !== shopId) throw new Error('এটা অন্য দোকানের কোড');
    CS.code = c; CS.needKey = false; CS.err = ''; setAuth(j); saveCS();
    if (rekey) { csAsked = false; syncNow(true); return false; }
    CS.lastU = ''; await cloudPull(true);
    if (!appData.setupDone) { CS = null; saveCS(); throw new Error('এই কোডে এখনো কোনো ডেটা নেই'); }
    appData = normalizeData(appData); save(); saveCS();
    return true;                        // নতুন ফোন — পাতা নতুন করে খুলতে হবে
}

// ---- স্ক্রিন ----
function cloudStatusText() {
    if (!CS) return 'বন্ধ';
    if (CS.needKey) return '⚠️ কোড বদলেছে — নতুন কোড দিন';
    if (csBusy) return '⏳ সিঙ্ক হচ্ছে…';
    if (CS.err) return '⚠️ ' + CS.err;
    if (!CS.last) return '⏳ শুরু হচ্ছে…';
    return '✅ সিঙ্ক হয়েছে ' + new Date(CS.last).toLocaleTimeString(LANG === 'en' ? 'en-GB' : 'bn-BD', { hour: 'numeric', minute: '2-digit' });
}
function updateSyncDot() {
    document.querySelectorAll('.sync-dot').forEach(el => {
        if (!CS) { el.style.display = 'none'; return; }
        el.style.display = 'inline-flex';
        el.classList.remove('busy', 'bad');
        if (CS.needKey || CS.err) { el.classList.add('bad'); el.textContent = '!'; el.title = cloudStatusText(); }
        else if (csBusy || !CS.last) { el.classList.add('busy'); el.textContent = '⟳'; el.title = cloudStatusText(); }
        else { el.textContent = '✓'; el.title = cloudStatusText(); }
    });
}
function syncDotTap() {
    if (!CS) return;
    const t = cloudStatusText();
    syncNow(true);
    alert(t + '\n\n(এখন আবার সিঙ্ক করা হচ্ছে)');
}
function cloudUpdateText() {
    updateSyncDot();
    const t = cloudStatusText();
    const sub = document.getElementById('cloudRowSub'); if (sub) sub.textContent = CS ? t : 'স্টাফের ফোনেও একই হিসাব (শুধু মালিক)';
    const st = document.getElementById('cloudStatus'); if (st) st.textContent = t;
}
function openCloudModal() { renderCloudModal(); openModal('cloudModal'); }
function renderCloudModal() {
    const b = document.getElementById('cloudBody');
    document.getElementById('cloudError').style.display = 'none';
    if (!CS) {
        b.innerHTML = `<p class="pdf-note" style="margin:0 0 12px">চালু করলে একটা <b>দোকান কোড</b> পাবেন। স্টাফের ফোনে অ্যাপ বসিয়ে সেই কোড দিলেই সব কাস্টমার ও হিসাব নেমে আসবে। দুই ফোনের এন্ট্রি নিজে থেকে মিলে যায়।</p>
            <button class="modal-btn confirm" style="width:100%" onclick="cloudStart()">☁️ চালু করুন</button>`;
    } else {
        b.innerHTML = `<div class="pdf-note" id="cloudStatus" style="margin:0 0 12px;font-weight:800"></div>
            <div id="cloudCodeBox" style="display:none" class="cloud-code"></div>
            <button class="modal-btn confirm" style="width:100%;margin-bottom:8px" onclick="cloudManual()">🔄 এখনই সিঙ্ক করুন</button>
            <button class="modal-btn confirm" style="width:100%;margin-bottom:8px" onclick="cloudShowCode()">🔑 দোকান কোড দেখুন</button>
            <button class="modal-btn cancel" style="width:100%;margin-bottom:8px" onclick="cloudRotate()">♻️ কোড বদলান (কারো অ্যাক্সেস বন্ধ করতে)</button>
            <button class="modal-btn cancel" style="width:100%" onclick="cloudOff()">⛔ এই ফোনে সিঙ্ক বন্ধ</button>`;
    }
    cloudUpdateText();
}
function cloudMsg(t) { const e = document.getElementById('cloudError'); e.textContent = t; e.style.display = t ? 'block' : 'none'; }
function cloudStart() {
    checkMyPassword(async function() {
        cloudMsg('⏳ চালু হচ্ছে…');
        try { await cloudCreate(); renderCloudModal(); cloudShowCodeNow(); }
        catch (e) { CS = null; saveCS(); cloudMsg('❌ ' + (cloudErr(e) === 'KEY_CHANGED' ? 'অ্যাকাউন্ট সমস্যা' : cloudErr(e))); }
    });
}
function cloudManual() { cloudMsg(''); syncNow(true).then(() => { if (CS && CS.err) cloudMsg('❌ ' + CS.err); }); }
function cloudShowCode() { checkMyPassword(cloudShowCodeNow); }
function cloudShowCodeNow() {
    const box = document.getElementById('cloudCodeBox'); if (!box || !CS) return;
    box.style.display = 'block';
    box.innerHTML = `<div class="cloud-code-lbl">দোকান কোড (স্টাফকে দিন, অন্য কাউকে নয়)</div><div class="cloud-code-val">${prettyCode(CS.code)}</div>
        <button class="modal-btn cancel" style="width:100%;margin-top:8px" onclick="cloudCopy()">📋 কপি করুন</button>`;
}
function cloudCopy() {
    const t = prettyCode(CS.code);
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(() => cloudMsg('✅ কপি হয়েছে'), () => prompt('কোড কপি করুন:', t));
    else prompt('কোড কপি করুন:', t);
}
function cloudRotate() {
    checkMyPassword(async function() {
        if (!confirm('কোড বদলালে সব স্টাফের ফোনে নতুন কোড দিতে হবে। এগিয়ে যাবেন?')) return;
        cloudMsg('⏳ বদলানো হচ্ছে…');
        try {
            const key = randomCode(12);
            const j = await authCall('update', { idToken: await getToken(), password: key, returnSecureToken: true });
            CS.code = CS.shopId + key; setAuth(j); saveCS();
            renderCloudModal(); cloudShowCodeNow(); cloudMsg('✅ নতুন কোড তৈরি। অন্য ফোনে এটা দিন।');
        } catch (e) { cloudMsg('❌ ' + cloudErr(e)); }
    });
}
function cloudOff() {
    if (!confirm('এই ফোনে সিঙ্ক বন্ধ করবেন? ফোনের ডেটা থাকবে, ক্লাউডের ডেটাও থাকবে।')) return;
    CS = null; saveCS(); renderCloudModal(); cloudUpdateText();
}
function openCloudJoin() { document.getElementById('cloudJoinCode').value = ''; document.getElementById('cloudJoinError').style.display = 'none'; openModal('cloudJoinModal'); }
async function cloudJoinSubmit() {
    const err = document.getElementById('cloudJoinError'), btn = document.getElementById('cloudJoinBtn');
    err.style.display = 'none'; btn.disabled = true; btn.textContent = '⏳ যুক্ত হচ্ছে…';
    try {
        const fresh = await cloudJoin(document.getElementById('cloudJoinCode').value);
        if (fresh) location.reload(); else closeModal('cloudJoinModal');
    } catch (e) { err.textContent = '❌ ' + (cloudErr(e) === 'KEY_CHANGED' ? 'কোড ঠিক নেই' : (e.message && /[ঀ-৿]/.test(e.message) ? e.message : cloudErr(e))); err.style.display = 'block'; }
    btn.disabled = false; btn.textContent = '☁️ যুক্ত হন';
}

function boot() {
    applyLang();
    initApp();
    document.getElementById('setupQuestion').addEventListener('change', function() {
        document.getElementById('setupCustomQWrap').style.display = (this.value === '__custom__') ? 'block' : 'none';
    });
    document.getElementById('cForm').addEventListener('submit', onAddCustomer);
    document.getElementById('pinModal').addEventListener('click', function(e) {
        if (e.target === this) closePinModal();
    });
    document.getElementById('transactionPinModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal('transactionPinModal');
            pendingTxAction = null;
        }
    });
    document.addEventListener('click', onDocumentClick);
    setupKeyboardFix();
    cloudInit();
}
boot();

console.log('✅ বাকি খাতা v11.0 লোড হয়েছে');


// ---------- এন্ট্রির পর WhatsApp বার্তা ----------
function waEntryMessage(cus, kind, e, totals) { return docGen(() => waEntryMessage0(cus, kind, e, totals)); }
function waEntryMessage0(cus, kind, e, totals) {
    const shop = appData.shop.name ? `\n🏪 ${appData.shop.name}` : '';
    let body;
    if (kind === 'pay') {
        body = `💵 ${e.dt} তারিখে ${e.amt} টাকা জমা নেওয়া হয়েছে।`;
    } else if (Calc.isCash(e)) {
        body = `💵 ${e.dt} তারিখে ${txLabel(e).text} — ${e.amt} টাকা নগদে নেওয়া হয়েছে (বাকি নয়)।`;
    } else {
        body = `📋 ${e.dt} তারিখে ${txLabel(e).text} — ${e.amt} টাকা বাকিতে দেওয়া হয়েছে।`;
    }
    const due = totals.due > 0 ? `🔹 আপনার মোট বাকি এখন: ${totals.due} টাকা।` : '✅ আপনার কোনো বাকি নেই।';
    return `${shop ? shop.trim() + '\n' : ''}\nপ্রিয় ${cus.name},\n${body}\n${due}\n\n🔴 *হিসাবে ভুল থাকলে আজই জানান।*\n🔴 *পরে কোনো সংশোধন করা হবে না।*`;
}
let _waBuild = null, _waCus = null;
function waAskShow(msg, lang) {
    const num = String(_waCus.phone || '').replace(/[^0-9]/g, '');
    document.getElementById('waAskMsg').innerText = msg;
    document.getElementById('waAskLink').href = 'https://wa.me/' + (num.length >= 8 ? num : '') + '?text=' + encodeURIComponent(msg);
    const en = lang ? lang === 'en' : docEn();
    document.getElementById('waLangBn').classList.toggle('on', !en);
    document.getElementById('waLangEn').classList.toggle('on', en);
}
// পপআপে বার্তার ভাষা বদলানো (শুধু এই বার্তার জন্য; স্থায়ী ডিফল্ট সেটিংসে)
function waAskLang(l) {
    if (!_waBuild) return;
    let msg;
    DOC_OVERRIDE = l;
    try { msg = _waBuild(); } finally { DOC_OVERRIDE = null; }   // বাকি সব জায়গায় ডিফল্ট ভাষাই চলবে
    waAskShow(msg, l);
}
function waAskAfterEntry(cus, build, force) {
    if (appData.waNotify === false && !force) return;
    DOC_OVERRIDE = null;
    _waCus = cus; _waBuild = typeof build === 'function' ? build : () => build;
    const msg = _waBuild();
    const num = String(cus.phone || '').replace(/[^0-9]/g, '');
    const okNum = num.length >= 8;
    document.getElementById('waAskName').innerText = '👤 ' + cus.name;
    waAskShow(msg);
    const w = document.getElementById('waAskWarn');
    w.style.display = okNum ? 'none' : 'block';
    setTimeout(() => openModal('waAskModal'), 300);
}
// কার্ডের WhatsApp বোতাম: আগে ভাষা জিজ্ঞেস (পপআপ), তারপর পাঠানো
function waAskCard(idx) {
    const c = appData.customers[idx]; if (!c) return;
    waAskAfterEntry(c, () => buildWaMessage(c, getCustomerTotals(c)), true);
}
function waAskClose() { closeModal('waAskModal'); DOC_OVERRIDE = null; }
function waNotifyRowText() { return appData.waNotify === false ? 'এখন বন্ধ — চাপলে চালু হবে (শুধু মালিক)' : 'এখন চালু — চাপলে বন্ধ হবে (শুধু মালিক)'; }
function toggleWaNotify() {
    appData.waNotify = appData.waNotify === false;
    save();
    refreshWaRow();
    alert(appData.waNotify ? '✅ এন্ট্রির পর WhatsApp বার্তার পপআপ চালু হলো' : '⏸️ পপআপ বন্ধ হলো');
}
function refreshWaRow() { const el = document.getElementById('waRowSub'); if (el) el.textContent = waNotifyRowText(); }


// ---------- 📲 রিচার্জ অ্যাপ (শুধু মালিক, APK-তে অ্যাপ খোলে) ----------
function bnToEn(t) { return String(t).replace(/[০-৯]/g, d => '০১২৩৪৫৬৭৮৯'.indexOf(d)); }
// নোটের ভেতরের ফোন নম্বরের পাশে রিচার্জ বাটন
function noteWithNumbers(note) {
    const re = /\+?[0-9০-৯][0-9০-৯ \-]{8,}[0-9০-৯]/g;
    let out = '', last = 0, m;
    while ((m = re.exec(note)) !== null) {
        const digits = bnToEn(m[0]).replace(/[^0-9+]/g, '');
        out += escapeHtml(note.slice(last, m.index)) + escapeHtml(m[0]);
        if (digits.replace(/\D/g, '').length >= 8) out += ` <button class="rc-btn" onclick="rechargeGo('${digits}')">📲 রিচার্জ</button>`;
        last = m.index + m[0].length;
    }
    return out + escapeHtml(note.slice(last));
}
function rechargeGo(num) {
    if (!isOwner()) return;
    const n = bnToEn(num).replace(/[^0-9+]/g, '');
    if (window.AndroidApp && AndroidApp.copyText) AndroidApp.copyText(n);
    else if (navigator.clipboard) navigator.clipboard.writeText(n).catch(() => {});
    const app = appData.rechargeApp;
    if (!window.AndroidApp || !AndroidApp.openApp) return alert('📋 নম্বর কপি হয়েছে: ' + n + '\n\n(অ্যাপ খোলার সুবিধা শুধু APK-তে চলে)');
    if (!app || !app.pkg) return alert('📋 নম্বর কপি হয়েছে: ' + n + '\n\nরিচার্জের অ্যাপ এখনও বাছা নেই। সেটিংস → "রিচার্জ অ্যাপ" থেকে বাছুন।');
    if (!AndroidApp.openApp(app.pkg)) alert('📋 নম্বর কপি হয়েছে: ' + n + '\n\n"' + app.name + '" অ্যাপটি ফোনে পাওয়া যায়নি। সেটিংসে আবার বাছুন।');
}
let rcApps = [];
function openRechargeApp() {
    if (!window.AndroidApp || !AndroidApp.listApps) return alert('এই সুবিধা শুধু APK অ্যাপে চলে। ব্রাউজারে অ্যাপ বাছা যায় না।');
    try { rcApps = JSON.parse(AndroidApp.listApps()).sort((a, b) => a.n.localeCompare(b.n)); } catch (e) { rcApps = []; }
    document.getElementById('rcSearch').value = '';
    renderRechargeApps();
    openModal('rechargeAppModal');
}
function renderRechargeApps() {
    const q = document.getElementById('rcSearch').value.trim().toLowerCase();
    const cur = appData.rechargeApp && appData.rechargeApp.pkg;
    const list = rcApps.filter(a => !q || a.n.toLowerCase().includes(q));
    document.getElementById('rcCurrent').textContent = cur ? '✅ বাছা আছে: ' + appData.rechargeApp.name : 'এখনও কোনো অ্যাপ বাছা নেই';
    document.getElementById('rcList').innerHTML = list.map(a =>
        `<div class="rc-item${a.p === cur ? ' on' : ''}" onclick="pickRechargeApp('${a.p.replace(/'/g, '')}')">${escapeHtml(a.n)}</div>`).join('') || '<div class="rc-empty">কিছু পাওয়া যায়নি</div>';
}
function pickRechargeApp(pkg) {
    const a = rcApps.find(x => x.p === pkg);
    if (!a) return;
    appData.rechargeApp = { name: a.n, pkg: a.p };
    save();
    closeModal('rechargeAppModal');
    alert('✅ রিচার্জ অ্যাপ: ' + a.n);
}
function clearRechargeApp() {
    delete appData.rechargeApp;
    save();
    renderRechargeApps();
}


// ---------- 📨 একটানা হিসাব পাঠানো (শুধু মালিক) ----------
let BK = (function() { try { return JSON.parse(localStorage.getItem('bkBulkRun')) || null; } catch (e) { return null; } })() || { run: false, ids: [], sent: {}, i: -1, pending: false, auto: false, delay: 2, at: 0 };
let bulkMode = 'due', bulkTimer = null, bulkLangSel = 'bn';
function bulkLang(l) {
    bulkLangSel = l;
    const a = document.getElementById('bkLangBn'), b = document.getElementById('bkLangEn');
    if (a) a.classList.toggle('on', l === 'bn');
    if (b) b.classList.toggle('on', l === 'en');
}
function bulkMsg(c) {
    DOC_OVERRIDE = BK.lang || bulkLangSel;
    try { return buildWaMessage(c, getCustomerTotals(c)); } finally { DOC_OVERRIDE = null; }
}
function bulkSave() { try { localStorage.setItem('bkBulkRun', JSON.stringify(BK)); } catch (e) {} }
function bulkNum(c) { return bnToEn(c.phone || '').replace(/\D/g, ''); }
function bulkCandidates() {
    const ok = [], noPhone = [];
    appData.customers.forEach(c => {
        const t = getCustomerTotals(c);
        const has = mode => mode === 'due' ? t.due > 0 : ((c.tx || []).length + (c.payment || []).length > 0);
        if (!has(bulkMode)) return;
        (bulkNum(c).length >= 8 ? ok : noPhone).push({ c, due: t.due });
    });
    ok.sort((a, b) => b.due - a.due);
    return { ok, noPhone };
}
function openBulk() {
    if (!isOwner()) return;
    if (BK.run) { bulkShowRun(); openModal('bulkModal'); return; }
    bulkMode = 'due';
    bulkLang(docEn() ? 'en' : 'bn');
    bulkRenderSelect();
    document.getElementById('bulkSelect').style.display = 'block';
    document.getElementById('bulkRun').style.display = 'none';
    openModal('bulkModal');
}
function setBulkMode(m) { bulkMode = m; bulkRenderSelect(); }
function bulkRenderSelect() {
    document.querySelectorAll('#bulkChips button').forEach(b => b.classList.toggle('on', b.dataset.m === bulkMode));
    const { ok, noPhone } = bulkCandidates();
    document.getElementById('bkList').innerHTML = ok.map(x =>
        `<label class="bk-row"><input type="checkbox" class="bk-chk" value="${escapeHtml(x.c.id)}" checked onchange="bulkCount()"><span><b>${escapeHtml(x.c.name)}</b><br><small>${escapeHtml(x.c.phone)} · বাকি ${x.due} ৳</small></span></label>`).join('')
        || '<div class="bk-empty">কেউ নেই</div>';
    document.getElementById('bkNoPhone').innerHTML = noPhone.length
        ? '<div class="bk-warn">⚠️ ফোন নম্বর নেই বা ছোট, তাই বাদ: ' + noPhone.map(x => escapeHtml(x.c.name)).join(', ') + '</div>' : '';
    bulkCount();
}
function bulkCount() {
    const n = document.querySelectorAll('.bk-chk:checked').length;
    document.getElementById('bkCount').textContent = n + ' জন বাছা';
    document.getElementById('bkStart').disabled = n === 0;
}
function bulkToggleAll(on) { document.querySelectorAll('.bk-chk').forEach(x => { x.checked = on; }); bulkCount(); }
function bulkStart() {
    const ids = [...document.querySelectorAll('.bk-chk:checked')].map(x => x.value);
    if (!ids.length) return;
    BK = { run: true, lang: bulkLangSel, ids, sent: {}, i: -1, pending: false, auto: document.getElementById('bkAuto').checked, delay: +document.getElementById('bkDelay').value || 2, at: 0 };
    bulkSave();
    bulkShowRun();
    bulkNext();
}
function bulkCust(id) { return appData.customers.find(c => c.id === id); }
function bulkNextId() { return BK.ids.find(id => !BK.sent[id] && bulkCust(id)); }
function bulkShowRun() {
    document.getElementById('bulkSelect').style.display = 'none';
    document.getElementById('bulkRun').style.display = 'block';
    const done = BK.ids.filter(id => BK.sent[id]).length;
    document.getElementById('bkProg').textContent = done + ' / ' + BK.ids.length + ' জন';
    document.getElementById('bkBar').style.width = (BK.ids.length ? done * 100 / BK.ids.length : 0) + '%';
    document.getElementById('bkDone').innerHTML = BK.ids.filter(id => BK.sent[id] && bulkCust(id)).map(id => `<span class="bk-ok">✓ ${escapeHtml(bulkCust(id).name)}</span>`).join('');
    const nid = bulkNextId(), btn = document.getElementById('bkNextBtn');
    btn.style.display = nid ? 'block' : 'none';
    if (nid) btn.textContent = '💬 পরের জন: ' + bulkCust(nid).name + ' →';
}
function bulkNext() {
    clearInterval(bulkTimer);
    const id = bulkNextId();
    if (!id) return bulkFinish();
    const c = bulkCust(id);
    BK.i = BK.ids.indexOf(id); BK.pending = true; BK.at = Date.now(); bulkSave();
    bulkShowRun();
    document.getElementById('bkMsg').textContent = '👤 ' + c.name + ' — WhatsApp খুলছে… Send চেপে ব্যাক চাপুন।';
    document.getElementById('bkNextBtn').style.display = 'none';
    location.href = 'https://wa.me/' + bulkNum(c) + '?text=' + encodeURIComponent(bulkMsg(c));
}
function bulkBack() {
    if (!BK.run || !BK.pending || !isOwner() || Date.now() - BK.at < 1500) return;
    BK.pending = false;
    const id = BK.ids[BK.i];
    if (id) BK.sent[id] = true;
    bulkSave();
    openModal('bulkModal');
    bulkShowRun();
    const nid = bulkNextId();
    if (!nid) return bulkFinish();
    clearInterval(bulkTimer);
    if (!BK.auto) { document.getElementById('bkMsg').textContent = '✓ হয়েছে। এবার নিচের সবুজ বাটন চাপুন।'; return; }
    let t = BK.delay || 2;
    const say = () => { document.getElementById('bkMsg').textContent = 'পরের জন: ' + bulkCust(nid).name + ' — ' + t + ' সেকেন্ডে খুলছে…'; };
    say();
    bulkTimer = setInterval(() => { t--; if (t <= 0) { clearInterval(bulkTimer); bulkNext(); } else say(); }, 1000);
}
function bulkFinish() {
    clearInterval(bulkTimer);
    const n = BK.ids.filter(id => BK.sent[id]).length;
    BK = { run: false, ids: [], sent: {}, i: -1, pending: false, auto: false, delay: 2, at: 0 };
    bulkSave();
    document.getElementById('bulkSelect').style.display = 'none';
    document.getElementById('bulkRun').style.display = 'block';
    document.getElementById('bkProg').textContent = '🎉 ' + n + ' জনকে পাঠানো হয়ে গেছে';
    document.getElementById('bkBar').style.width = '100%';
    document.getElementById('bkMsg').textContent = '';
    document.getElementById('bkNextBtn').style.display = 'none';
}
function bulkStop() {
    clearInterval(bulkTimer);
    BK = { run: false, ids: [], sent: {}, i: -1, pending: false, auto: false, delay: 2, at: 0 };
    bulkSave();
    openBulk();
}
function bulkResume() {
    if (!BK.run || !isOwner()) return;
    openModal('bulkModal');
    bulkShowRun();
    if (BK.pending) { BK.at = 0; bulkBack(); }
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) bulkBack(); });
window.addEventListener('pageshow', () => bulkBack());
window.addEventListener('focus', () => bulkBack());


// ---------- 👆 ফিঙ্গারপ্রিন্ট দিয়ে লগইন (শুধু APK; শুধু লগইনের জন্য) ----------
function fpLoad() { try { return JSON.parse(localStorage.getItem('bkFp')) || {}; } catch (e) { return {}; } }
function fpStore(o) { try { localStorage.setItem('bkFp', JSON.stringify(o)); } catch (e) {} }
function fpAvailable() { return !!(window.AndroidApp && AndroidApp.bioStatus && AndroidApp.bioAuth); }
function fpStatus() { try { return AndroidApp.bioStatus(); } catch (e) { return 'unsupported'; } }
function fpAccById(id) {
    if (appData.owner && appData.owner.id === id) return { acc: appData.owner, role: 'owner' };
    const e = appData.employees.find(x => x.id === id);
    return e ? { acc: e, role: 'employee' } : null;
}
// চালু ততক্ষণই বৈধ, যতক্ষণ অ্যাকাউন্ট আছে ও পাসওয়ার্ড বদলায়নি
function fpValid(id) { const o = fpLoad(), r = fpAccById(id); return !!(o[id] && r && r.acc.passHash && o[id] === r.acc.passHash); }
window.__bioCbs = {};
window.__bioDone = function(id, status) { const f = window.__bioCbs[id]; if (f) { delete window.__bioCbs[id]; f(status); } };
function fpPrompt(title, sub, cb) {
    const id = 'b' + Date.now();
    window.__bioCbs[id] = cb;
    try { AndroidApp.bioAuth(title, sub, id); } catch (e) { delete window.__bioCbs[id]; cb('error:' + e.message); }
}
function fpRefreshRow() {
    const el = document.getElementById('fpRowSub');
    if (!el || !currentUser) return;
    el.textContent = !fpAvailable() ? 'শুধু APK অ্যাপে চলে' : (fpValid(currentUser.id) ? '✅ এই ফোনে চালু — চাপলে বন্ধ হবে' : 'এই ফোনে বন্ধ — চাপলে চালু হবে (শুধু লগইনের জন্য)');
}
function fpSettings() {
    if (!fpAvailable()) return alert('ফিঙ্গারপ্রিন্ট লগইন শুধু APK অ্যাপে চলে।');
    const id = currentUser.id;
    if (fpValid(id)) {
        if (confirm('এই ফোনে আপনার ফিঙ্গারপ্রিন্ট লগইন বন্ধ করবেন?')) { const o = fpLoad(); delete o[id]; fpStore(o); fpRefreshRow(); alert('⏸️ ফিঙ্গারপ্রিন্ট লগইন বন্ধ হলো'); }
        return;
    }
    const st = fpStatus();
    if (st === 'unsupported') return alert('এই ফোনে ফিঙ্গারপ্রিন্ট সুবিধা পাওয়া যায়নি।');
    if (st === 'none') return alert('আগে ফোনের সেটিংসে নিজের ফিঙ্গারপ্রিন্ট সেট করুন, তারপর এখানে চালু করুন।');
    if (!confirm('👆 ফিঙ্গারপ্রিন্ট শুধু এই অ্যাপে ঢোকার (লগইন) জন্য।\nলেনদেন, পিন বা পাসওয়ার্ড বদলের জন্য নয়।\n\nমনে রাখবেন: এই ফোনে যাদের ফিঙ্গারপ্রিন্ট দেওয়া আছে, সবাই এই অ্যাকাউন্টে ঢুকতে পারবে।\n\nচালু করবেন?')) return;
    checkMyPassword(function() {
        fpPrompt('ফিঙ্গারপ্রিন্ট চালু করুন', 'শুধু লগইনের জন্য', function(s) {
            if (s === 'ok') {
                const r = fpAccById(id), o = fpLoad();
                if (!r) return;
                o[id] = r.acc.passHash; fpStore(o); fpRefreshRow();
                alert('✅ চালু হলো। এরপর লগইন পেজে 👆 বাটন চাপলে ফিঙ্গারপ্রিন্টে ঢুকতে পারবেন।\nশুধু লগইনের জন্য — লেনদেনের পাসওয়ার্ড আগের মতোই লাগবে।');
            } else if (s !== 'cancel') alert('❌ ফিঙ্গারপ্রিন্ট চালু হয়নি। আবার চেষ্টা করুন।');
        });
    });
}
function fpLoginAcc() {
    if (!fpAvailable()) return null;
    const u = document.getElementById('loginUser').value.trim().toLowerCase();
    const all = [appData.owner].concat(appData.employees).filter(Boolean);
    if (u) { const a = all.find(x => x.username === u); return a && fpValid(a.id) ? a : null; }
    const last = loadSavedUsers().last;
    return all.find(x => x.username === last && fpValid(x.id)) || all.find(x => fpValid(x.id)) || null;
}
function fpUpdateLogin() {
    const b = document.getElementById('loginFpBtn');
    if (!b) return;
    const a = (fpAvailable() && fpStatus() === 'ok') ? fpLoginAcc() : null;
    b.style.display = a ? 'block' : 'none';
    if (a) b.innerHTML = ICON_FP + ' <span>ফিঙ্গারপ্রিন্ট দিয়ে লগইন — ' + escapeHtml(a.name) + '</span>';
}
function fpLogin() {
    const a = fpLoginAcc();
    if (!a) return fpUpdateLogin();
    fpPrompt('লগইন', a.name, function(s) {
        if (s === 'ok') {
            const r = fpAccById(a.id);
            if (!r || !fpValid(a.id)) return fpUpdateLogin();
            currentUser = { role: r.role, id: a.id, name: a.name, username: a.username, viewer: r.role !== 'owner' && !!a.viewer };
            rememberLoginUser(a.username);
            bkSessSave();
            openMainApp();
        } else if (s !== 'cancel') {
            const box = document.getElementById('loginErrorBox');
            box.innerText = '❌ ফিঙ্গারপ্রিন্ট মেলেনি। আবার চেষ্টা করুন বা পাসওয়ার্ড দিন।'; box.style.display = 'block';
        }
    });
}


// ---------- ভাসমান ছোট ক্যালকুলেটর (টেনে যেখানে খুশি রাখা যায়) ----------
let calcExpr = '';
function calcEval(str) {
    const t = str.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
    let i = 0;
    const num = () => { const m = /^\d*\.?\d+|^\d+\.?/.exec(t.slice(i)); if (!m) throw 0; i += m[0].length; return parseFloat(m[0]); };
    const unary = () => { if (t[i] === '-') { i++; return -unary(); } if (t[i] === '+') { i++; return unary(); } return num(); };
    const term = () => { let v = unary(); while (t[i] === '*' || t[i] === '/') { const o = t[i++]; const r = unary(); v = o === '*' ? v * r : v / r; } return v; };
    const expr = () => { let v = term(); while (t[i] === '+' || t[i] === '-') { const o = t[i++]; const r = term(); v = o === '+' ? v + r : v - r; } return v; };
    const v = expr(); if (i !== t.length || !isFinite(v)) throw 0; return Calc.r2(v);
}
function calcShow() {
    const e = document.getElementById('calcExpr'), r = document.getElementById('calcRes');
    if (!e) return;
    e.textContent = calcExpr || '0';
    let v = '';
    try { if (/[+\-×÷]/.test(calcExpr.replace(/^-/, ''))) v = String(calcEval(calcExpr)); } catch (x) { v = ''; }
    r.textContent = v;
}
function calcKey(k) {
    if (k === 'C') calcExpr = '';
    else if (k === '⌫') calcExpr = calcExpr.slice(0, -1);
    else if (k === '=') { try { calcExpr = String(calcEval(calcExpr)); } catch (x) { /* অসম্পূর্ণ — কিছু না */ } }
    else if (/[+\-×÷]/.test(k)) {
        if (!calcExpr && k !== '−') { /* শুরুতে চিহ্ন নয় */ }
        else if (/[+\-×÷]$/.test(calcExpr)) calcExpr = calcExpr.slice(0, -1) + (k === '−' ? '-' : k);
        else calcExpr += (k === '−' ? '-' : k);
    } else if (k === '.') {
        const last = calcExpr.split(/[+\-×÷]/).pop();
        if (last.indexOf('.') < 0) calcExpr += last === '' ? '0.' : '.';
    } else calcExpr += k;
    calcShow();
}
function openCalc() {
    let el = document.getElementById('calcFloat');
    if (!el) {
        el = document.createElement('div'); el.id = 'calcFloat'; el.className = 'calc-float';
        const keys = ['C','⌫','÷','×','7','8','9','−','4','5','6','+','1','2','3','=','0','.'];
        el.innerHTML = '<div class="calc-bar" id="calcBar"><span>' + ICON_CALC + ' ক্যালকুলেটর</span><button type="button" class="calc-x" onclick="closeCalc()">✕</button></div>' +
            '<div class="calc-disp"><div id="calcExpr">0</div><div id="calcRes"></div></div><div class="calc-keys">' +
            keys.map(k => '<button type="button" class="ck' + (k === '=' ? ' eq' : /[⌫÷×−+C]/.test(k) ? ' op' : '') + (k === '0' ? ' z' : '') + '" onclick="calcKey(\'' + k + '\')">' + k + '</button>').join('') + '</div>';
        document.body.appendChild(el);
        const bar = document.getElementById('calcBar'); let dx = 0, dy = 0, on = false;
        bar.addEventListener('pointerdown', e => { if (e.target.closest('.calc-x')) return; on = true; const r = el.getBoundingClientRect(); dx = e.clientX - r.left; dy = e.clientY - r.top; bar.setPointerCapture(e.pointerId); });
        bar.addEventListener('pointermove', e => { if (!on) return; const w = el.offsetWidth, h = el.offsetHeight;
            el.style.left = Math.max(0, Math.min(window.innerWidth - w, e.clientX - dx)) + 'px';
            el.style.top = Math.max(0, Math.min(window.innerHeight - h, e.clientY - dy)) + 'px'; el.style.right = 'auto'; el.style.bottom = 'auto'; });
        const end = () => { on = false; };
        bar.addEventListener('pointerup', end); bar.addEventListener('pointercancel', end);
    }
    el.style.display = 'block'; calcShow();
}
function closeCalc() { const el = document.getElementById('calcFloat'); if (el) el.style.display = 'none'; }


// ---------- আইকন (SVG) ও নড়াচড়া করা পতাকা ----------
(function () {
    function start() {
        const host = document.querySelector('.bd-flag'); if (!host || host.querySelector('video')) return;
        try {
            const bin = atob(FLAG_MP4_B64), arr = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
            const v = document.createElement('video');
            v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', '');
            v.src = URL.createObjectURL(new Blob([arr], { type: 'video/mp4' }));
            v.addEventListener('playing', () => host.classList.add('has-video'));
            host.appendChild(v);
            const p = v.play(); if (p && p.catch) p.catch(() => {});
        } catch (e) { /* ভিডিও না চললে আগের স্থির পতাকাই থাকবে */ }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();


// ---------- 📞 কল বাটন ----------
function telHref(phone) {
    const d = bnToEn(String(phone || '')).replace(/[^0-9+]/g, '');
    if (!d) return '#';
    return 'tel:' + ((d[0] === '0' || d[0] === '+') ? '' : '+') + d;
}

// ---------- 💾 ব্যাকআপ রিমাইন্ডার (মালিককে, দিনে একবার) ----------
function backupRemind() {
    if (!isOwner()) return;
    let never = false, today = todayLocal();
    try {
        if (localStorage.getItem('bkRemindDay') === today) return;
        never = !Number(localStorage.getItem('bkLastBackup'));
    } catch (e) { return; }
    const days = backupDaysSince();
    if (days < BACKUP_WARN_DAYS) return;
    try { localStorage.setItem('bkRemindDay', today); } catch (e) {}
    document.getElementById('bkRemindText').textContent = never
        ? 'আপনি এখনও একবারও ব্যাকআপ নেননি। ফোন হারালে বা অ্যাপ মুছলে সব হিসাব চলে যেতে পারে।'
        : 'আপনি ' + days + ' দিন ধরে ব্যাকআপ নেননি। ফোন হারালে বা অ্যাপ মুছলে সব হিসাব চলে যেতে পারে।';
    openModal('bkRemindModal');
}
function backupRemindGo() { closeModal('bkRemindModal'); handleSetting('backup'); }

// ---------- 🌙 দিনের হিসাব মেলানো ----------
function openDayClose() {
    if (!isOwner()) return showEmployeeLockedMsg();
    document.getElementById('dcDate').value = todayLocal();
    document.getElementById('dcCounted').value = '';
    renderDayClose();
    openModal('dayCloseModal');
}
function dayCloseData() {
    const d = document.getElementById('dcDate').value || todayLocal();
    const r = Calc.salesReport(appData, d, d);
    const sup = Calc.r2((appData.stock.entries || []).filter(e => e.kind === 'supPay' && e.dt === d).reduce((a, e) => a + Calc.num(e.amt), 0));
    return { d, cash: r.cash, baki: r.baki, collected: r.collected, sup, expected: Calc.r2(r.cash + r.collected - sup) };
}
function renderDayClose() {
    const v = dayCloseData(), f = n => String(Calc.r2(n));
    document.getElementById('dcDateText').textContent = formatDateBn(v.d);
    document.getElementById('dcBody').innerHTML =
        `<div class="dc-row"><span>💵 নগদ বিক্রি</span><b class="g">${f(v.cash)} ৳</b></div>` +
        `<div class="dc-row"><span>💰 বাকি আদায় (জমা নিয়েছেন)</span><b class="g">${f(v.collected)} ৳</b></div>` +
        (v.sup > 0 ? `<div class="dc-row"><span>💸 সরবরাহকারীকে দিয়েছেন</span><b class="r">− ${f(v.sup)} ৳</b></div>` : '') +
        `<div class="dc-row dc-total"><span>🧮 হাতে নগদ থাকার কথা</span><b>${f(v.expected)} ৳</b></div>` +
        `<div class="dc-sep"></div>` +
        `<div class="dc-row"><span>📒 বাকিতে বিক্রি (টাকা হাতে আসেনি)</span><b class="o">${f(v.baki)} ৳</b></div>` +
        `<div class="dc-row"><span>🧾 মোট বিক্রি</span><b>${f(v.cash + v.baki)} ৳</b></div>`;
    dayCloseDiff();
}
function dayCloseDiff() {
    const el = document.getElementById('dcDiff'), raw = document.getElementById('dcCounted').value;
    if (raw === '') { el.className = 'dc-diff'; el.textContent = 'ক্যাশ গুনে নিচের ঘরে লিখুন, অ্যাপ মিলিয়ে দেখাবে'; return; }
    const diff = Calc.r2(Calc.num(raw) - dayCloseData().expected);
    if (diff === 0) { el.className = 'dc-diff ok'; el.textContent = '✅ হিসাব মিলে গেছে'; }
    else if (diff > 0) { el.className = 'dc-diff more'; el.textContent = '⚠️ ' + diff + ' টাকা বেশি আছে — কোনো বিক্রি/জমা লিখতে ভুলে গেছেন কিনা দেখুন'; }
    else { el.className = 'dc-diff less'; el.textContent = '⚠️ ' + Math.abs(diff) + ' টাকা কম আছে — কোনো খরচ বা ভুল এন্ট্রি আছে কিনা দেখুন'; }
}


// ---------- 👁️ তদারকি ইউজারের শুধু-দেখার পর্দা ----------
let vwTab = '';
function openViewerApp() {
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('viewerScreen').style.display = 'block';
    vwTab = '';
    try { renderShopName(); } catch (e) {}
    renderViewer();
    if (typeof cloudInit === 'function' && window.CS) { try { syncNow(); } catch (e) {} }
}
function viewerAcc() { return appData.employees.find(e => e.id === currentUser.id) || null; }
function viewerRows(name) {
    const rows = [];
    (appData.customers || []).forEach(c => {
        const cur = (c.tx || []).filter(t => t && t.tp === name).map(t => ({ t, hist: false }));
        const old = (c.history || []).reduce((a, hh) => a.concat((hh.tx || []).filter(t => t && t.tp === name)), []).map(t => ({ t, hist: true }));
        // এই আইটেমে ভাগ করে দেওয়া পেমেন্ট, পুরনো বাকি থেকে আগে কাটা হয়
        let left = 0; (c.payment || []).forEach(p => (p.alloc || []).forEach(a => { if (a.item === name) left += Calc.num(a.amt); }));
        cur.sort((a, b) => ((a.t.dt || '') < (b.t.dt || '') ? -1 : 1));
        cur.forEach(x => {
            const amt = Calc.num(x.t.amt), cash = Calc.isCash(x.t); let due = 0;
            if (!cash) { const cv = Math.min(left, amt); left -= cv; due = Calc.r2(amt - cv); }
            rows.push({ c: c, dt: x.t.dt || '', qty: Calc.num(x.t.qty) || 0, amt: amt, cash: cash, due: due, hist: false });
        });
        old.forEach(x => rows.push({ c: c, dt: x.t.dt || '', qty: Calc.num(x.t.qty) || 0, amt: Calc.num(x.t.amt), cash: Calc.isCash(x.t), due: 0, hist: true }));
    });
    return rows.sort((a, b) => (a.dt < b.dt ? 1 : a.dt > b.dt ? -1 : 0));
}
// কার কাছে এই আইটেমের কত বাকি আটকে আছে
function viewerOwed(rows) {
    const m = {};
    rows.forEach(r => { if (r.due > 0) { const k = r.c.id || r.c.name; const o = m[k] || (m[k] = { c: r.c, due: 0, old: r.dt }); o.due = Calc.r2(o.due + r.due); if (r.dt && (!o.old || r.dt < o.old)) o.old = r.dt; } });
    return Object.values(m).sort((a, b) => b.due - a.due);
}
function vwPick(n) { vwTab = n; renderViewer(); }
function renderViewer() {
    if (!currentUser || !currentUser.viewer) return;
    const acc = viewerAcc();
    document.getElementById('vwShop').textContent = (appData.shop && appData.shop.name) || 'বাকি খাতা';
    document.getElementById('vwUser').textContent = currentUser.name;
    const allowed = ((acc && acc.viewItems) || []).filter(n => (appData.itemList || []).some(i => i.name === n));
    const body = document.getElementById('vwBody'), tabs = document.getElementById('vwTabs');
    if (!allowed.length) { tabs.innerHTML = ''; body.innerHTML = '<div class="vw-card"><p style="text-align:center;color:#64748b">আপনাকে এখনো কোনো পণ্য দেখার অনুমতি দেওয়া হয়নি।</p></div>'; return; }
    if (!allowed.includes(vwTab)) vwTab = allowed[0];
    tabs.innerHTML = allowed.map(n => `<span class="${n === vwTab ? 'on' : ''}" onclick="vwPick('${escapeHtml(n).replace(/'/g, "\\'")}')">${escapeHtml(n)}</span>`).join('');
    const it = (appData.itemList || []).find(i => i.name === vwTab), u = escapeHtml((it && it.unit) || '');
    const rows = viewerRows(vwTab), showPh = !!(acc && acc.viewPhone);
    let q = 0, qc = 0, qb = 0, tk = 0;
    rows.forEach(r => { q += r.qty; tk += r.amt; if (r.cash) qc += r.qty; else qb += r.qty; });
    const st = it && it.stock ? Calc.stockInfo(appData, vwTab) : null;
    const box = (v, l, bg) => `<div style="background:${bg}"><b>${v}</b>${l}</div>`;
    let h = `<div class="vw-card"><div class="vw-sum">${box(Calc.r2(q), 'মোট বিক্রি' + (u ? ' (' + u + ')' : ''), '#eef2ff')}${box(Calc.r2(qc), 'নগদ', '#dcfce7')}${box(Calc.r2(qb), 'বাকি', '#fee2e2')}</div>` +
        `<div class="vw-sum">${box(Calc.r2(tk) + ' ৳', 'মোট টাকা', '#f8fafc')}${st ? box(st.remaining, 'এখন আছে', '#f8fafc') : ''}</div></div>`;
    const owed = viewerOwed(rows);
    if (owed.length) {
        const tot = Calc.r2(owed.reduce((a, o) => a + o.due, 0));
        h += '<div class="vw-card"><div class="vw-h">📒 যাদের কাছে বাকি আছে</div>' + owed.map(o => {
            const days = o.old ? Math.max(0, Math.floor((Date.now() - new Date(o.old + 'T00:00:00').getTime()) / 864e5)) : 0;
            return `<div class="vw-row"><div class="vw-av">${avatarHtml(o.c)}</div><div class="vw-nm"><div>${escapeHtml(o.c.name)}</div><small>${showPh && o.c.phone ? '<a href="tel:' + escapeHtml(String(o.c.phone).replace(/[^0-9+]/g, '')) + '" style="color:inherit">📞 ' + escapeHtml(o.c.phone) + '</a> · ' : ''}<span>${days} দিন আগে থেকে</span></small></div><div class="vw-q"><span class="vw-tag b">${o.due} ৳</span></div></div>`;
        }).join('') + `<div style="text-align:right;font-weight:800;padding:8px 4px 0">মোট আটকে আছে: ${tot} ৳</div></div>`;
    }
    h += '<div class="vw-card"><div class="vw-h">কে কত নিয়েছে</div>' + (rows.map(r => {
        const c = r.c;
        return `<div class="vw-row"><div class="vw-av">${avatarHtml(c)}</div><div class="vw-nm"><div>${escapeHtml(c.name)}</div><small>${showPh && c.phone ? '📞 ' + escapeHtml(c.phone) + ' · ' : ''}${escapeHtml(formatDateBn(r.dt))}</small></div>` +
            `<div class="vw-q">${r.qty ? Calc.r2(r.qty) + ' ' + u : ''}<div><span class="vw-tag ${r.cash || r.hist || r.due <= 0 ? 'c' : 'b'}">${r.cash ? '💵 নগদ' : (r.hist || r.due <= 0 ? '✅ শোধ' : '📒 বাকি ' + r.due + ' ৳')}</span></div></div></div>`;
    }).join('') || '<p style="text-align:center;color:#64748b">এখনো কোনো বিক্রি নেই</p>') + '</div>';
    body.innerHTML = h;
}

// স্টক পেজ নতুন করে আঁকলে সিঙ্ক-আইকনের অবস্থাও ঠিক করে দেয়
(function () { const _rs = renderStock; renderStock = function () { const r = _rs.apply(this, arguments); try { updateSyncDot(); } catch (e) {} return r; }; })();

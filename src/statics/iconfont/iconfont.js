import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1534517070683'); /* IE9*/
    src: url('iconfont.eot?t=1534517070683#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAVgAAsAAAAAB+wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8fkgvY21hcAAAAYAAAABcAAABnLO7G5pnbHlmAAAB3AAAAYEAAAGwhtuYXWhlYWQAAANgAAAALwAAADYSWUSbaGhlYQAAA5AAAAAcAAAAJAfeA4VobXR4AAADrAAAAA4AAAAQEAAAAGxvY2EAAAO8AAAACgAAAAoBHACObWF4cAAAA8gAAAAdAAAAIAEYADxuYW1lAAAD6AAAAUUAAAJtPlT+fXBvc3QAAAUwAAAALQAAAD6kRB6jeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByecTyzZW7438AQw9zA0AAUZgTJAQDiVAwoeJztkEEOgDAIBIe2msb4FI+mt37Gky/nG5WCBx/hkiGwIRwWWIBsHEYBuRGmLnPF/czmfqHZXq0SaNWmfYzv5BK/qDal+CArv3bv57vlmVrgWbbA/R4gD5GlExZ4nC2QzUoCURTHz7l3xoES9fo1GWqN1xmTwBEdNQI/goKoRS0qWxUEtbBlbUK30hP0BM6mBwjaRFq0cOtm1GXPUWNXcnF+nI//4scBCjAb0HfaAC/EwADQc5ipYSWJqg8VJkp0YhZbTJloWOXCGkbDHvy0p5I0tXtz9jo2pXanPWcbP1aCQ8bNOarSZJGwJxLpiWvblqQ56c83GwZz6aAAB4Al4fFKX+gBUFBgWdgEgEEYIqBBCkDVIpouKqQKj4qqZCqoyiFUoz4ipGpEPcKm+4wOPriPx46bddBpOg2n8fvmuKMmeeoykjZZl6GeC4Yty6LZ/9DpInSCm2SvK1QI6wbMNGFCCSThNKN98SIF/JAGE0DjGU3hWAxRI8M9CpXLxUICeYl7eMooWXW0eEoRn4uEo8VCuYqkf7Pvjveu0X+1eyt7iKy0cJyv3W2htpOrtC4a2+blRmJ9Vc+PRhTcLNYDBg+5Azl+/2WW89kzn/dQP5fjsUi8oCcB/gCCPmgJAAAAeJxjYGRgYADiD8I/HsTz23xl4GZhAIHrcxn8EPT/HSwMzF5ALgcDE0gUADkXCiIAeJxjYGRgYG7438AQw8IAAkCSkQEVsAAARwoCbXicY2FgYGBBwgAAsAARAAAAAAAAAEQAjgDYAAB4nGNgZGBgYGEwYOBiAAEmIOYCs/+D+QwADkwBVQAAAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgIWRiZGZkYWRlYErLTEvPSUxKzMvnSkpk8kxkYEBAENcBacAAAA=') format('woff'),
    url('iconfont.ttf?t=1534517070683') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('iconfont.svg?t=1534517070683#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:18px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-fangdajing:before { content: "\e63d"; }

  .icon-bi:before { content: "\e608"; }

  .icon-Aa:before { content: "\e636"; }
`

const _l = require("../node_modules/@primer/primitives/dist/json/colors/light.json"),
      _lHC = require("../node_modules/@primer/primitives/dist/json/colors/light_high_contrast.json"),
      _lC = require("../node_modules/@primer/primitives/dist/json/colors/light_colorblind.json"),
      _lT = require("../node_modules/@primer/primitives/dist/json/colors/light_tritanopia.json"),
      _d = require("../node_modules/@primer/primitives/dist/json/colors/dark.json"),
      _dD = require("../node_modules/@primer/primitives/dist/json/colors/dark_dimmed.json"),
      _dHC  = require("../node_modules/@primer/primitives/dist/json/colors/dark_high_contrast.json"),
      _dC = require("../node_modules/@primer/primitives/dist/json/colors/dark_colorblind.json"),
      _dT = require("../node_modules/@primer/primitives/dist/json/colors/dark_tritanopia.json")
      _gC = (t) => {return t === "l"?_l:(t === "lhc"?_lHC:(t === "lc"?_lC:(t === "lt"?_lT:(t === "d"?_d:(t === "dd"?_dD:(t === "dhc"?_dHC:(t === "dc"?_dC:(t === "dt"?_dT:false))))))))}
      module.exports = {_gC};

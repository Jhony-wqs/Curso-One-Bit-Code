import { inline } from "./inline.js"// essa forma se chama nomeada pois se refere pelo nome da função.
import defaultInline from './inline.js'//essa forma aceita ser chamada por outros nomes ou pode ser uma função anônima mais so pode ter um export default por arquivo.
import { group } from "./non-inline.js"//esse export não tem a necessidade de estar em inline e podendo exportar varias funções.

import exportDefault from "./non-inline.js"////esse export não tem a necessidade de estar em inline, e também só pode ter um por arquivo, podendo também exportar o nomeado não inline colocando apenas uma virgula e colocando as chaves com os nomes das funções.

inline()

defaultInline()

group()

exportDefault()
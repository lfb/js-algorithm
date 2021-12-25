var data = {
    goods: {
        price: 100,
        details: {
            name: 'cake',
            spec: {
                name: 'go'
            }
        },
        spu: {
            name: 12
        }
    },
    map: {
        name: 'goods',
        p: {
            d: 11
        }
    }
}

// 深度遍历json对象
const dfs = (data, path) => {
    console.log(path.join('.'), ':', data)

    if (typeof data !== 'object') {
        return data
    }

    Object.keys(data).forEach(k => {
        dfs(data[k], path.concat(k))
    })
}

dfs(data, ['data'])
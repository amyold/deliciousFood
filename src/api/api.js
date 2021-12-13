import instance from "./config.js";

// 获取中国菜系分布图数据
const getCategoryChartData = async (url) => {
    return await new Promise((resolve, reject) => {
        instance({
            url: url,
            method: "get",
            params: {},
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

// 获取每个菜系的所有数据
const getChineseFoodsData = async (url,category,pageNum,pageSize) => {
    return await new Promise((resolve, reject) => {
        instance({
            url: url,
            method: "get",
            params: {
                category:category,
                pageNum:pageNum,
                pageSize:pageSize
            },
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};


// 修改数据
const changeFoodsData = async (url,food) => {
    return await new Promise((resolve, reject) => {
        instance({
            url: url,
            method: "put",
            data:food
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

// 删除数据
const deleteFoodsData = async (url,food) => {
    return await new Promise((resolve, reject) => {
        instance({
            url: url,
            method: "post",
            data:food
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};
//获取目录
const getCategory = async (url) => {
    return await new Promise((resolve, reject) => {
        instance({
            url: url,
            method: "get",
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });

};
// 新增数据
const addFoods = async (url,food) => {
    return await new Promise((resolve, reject) => {
        instance({
            url: url,
            method: "post",
            data:food
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch(function (error) {
                reject(error);
            });
    });
};

export default {
    getCategoryChartData,
    getChineseFoodsData,
    changeFoodsData,
    deleteFoodsData,
    getCategory,
    addFoods,
}
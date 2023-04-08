<template>
    <div class="common-list">
        <el-page-header :icon="null" class="">
            <template #content>
                <span class="text-large font-600 mr-3"> {{ title }} </span>
            </template>
        </el-page-header>
        <div class="search-section">
            <el-input v-model="searchText" placeholder="请输入名称" @input="fetchData"></el-input>
        </div>
        <div class="content-section">
            <el-button type="primary" @click="addItemDialogVisible = true">
                新增
            </el-button>
            <el-button v-if="isDeviceView" type="primary" @click="syncStatusDialogVisible = true">
                同步状态
            </el-button>

            <div class="item-container">
                <el-card v-for="item in items" :key="item.id" class="item-card">
                    {{ item.name }}
                </el-card>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref, computed, onMounted } from 'vue';
import { fetchData } from '../api/mockApi';

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        apiEndpoint: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const searchText = ref('');
        const items = ref([]);
        const addItemDialogVisible = ref(false);
        const syncStatusDialogVisible = ref(false);

        const isDeviceView = computed(() => props.title === 'Device');

        const fetchListData = async () => {
            try {
                items.value = await fetchData(props.apiEndpoint, searchText.value);
            } catch (error) {
                console.error(`Error fetching data: ${error.message}`);
            }
        };

        onMounted(fetchListData);

        return {
            searchText,
            items,
            addItemDialogVisible,
            syncStatusDialogVisible,
            isDeviceView,
            fetchListData,
        };
    },
};
</script>
  
<style scoped>
.common-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
}



.title-section h2 {
    margin: 0;
}

.search-section {
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.content-section {
    /* background-color: #f0f2f5; */
    padding: 20px;
}

.item-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
}

.item-card {
    width: 200px;
    height: 100px;
}
</style>


<template>
 
  <div class="mytest">
    <el-upload
      action=""
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :http-request="uploadFile"
      >
   <i class="el-icon-plus"></i>
    </el-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
  
  <h5>{{url}}</h5>

  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>

   <el-form-item label="卖点">
    <el-input v-model="form.sellPoint"></el-input>
  </el-form-item>

   <el-form-item label="价格">
    <el-input v-model="form.price"></el-input>
  </el-form-item>

   <el-form-item label="数量">
    <el-input v-model="form.num"></el-input>
  </el-form-item>


  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>

  <el-form-item label="类目">
    <el-select v-model="form.cid" placeholder="请选择类目" @click.native.once="getcatcid">
      <el-option v-for="(item,i) in itemcat" :key="i" :label="item.name" :value="item.id"></el-option>
    </el-select>
    <!-- <el-cascader @click.native.once="getcatcid"
    v-model="form.cid"
    :options="itemcat"
    @change="handleChange"></el-cascader> -->
  </el-form-item>

  
  <el-form-item label="描述">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>

   

  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>

  
  
</el-form>
   <el-button type="primary" >获取cid</el-button>

   

</div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Mytest',
   data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        url:'',
        form: {
          title: '',
          date1: '',
          date2: '',
          sellPoint:'',
          price:'',
          num:'',
          desc: '',
          cid:''
        },
        itemcat:[]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      uploadFile(files){
        axios.post('http://localhost:4300/imgupload',null,{
          transformRequest: [() => {
          let formData = new FormData()
          formData.append('file', files.file)
           return formData
       }
      ]
     }).then(data => {
      console.log(data),
      this.url=data.data.url
     })
      },
      onSubmit() {
        // console.log('submit!');
        axios.post(
          'http://localhost:4300/saveitem',
           {
            title:this.form.title,
            sellPoint:this.form.sellPoint,
            price:this.form.price,
            num:this.form.num,
            image:this.url,
            cid:this.form.cid
           }
           ).then(resp =>{
             console.log(resp.data),
           
               location.reload()
             
           }).catch(resp =>{
             console.log(resp.data)
           })
      },
      getcatcid() {
        axios.get(
          'http://localhost:4300/finditemcat',
        ).then(resp => {
          console.log(resp),
          this.itemcat=resp.data
        }).catch(resp => {
           console.log('error')
        })
      },
      handleCommand(command) {
        // this.$message('click on item ' + command);
        this.form.cid=command
      },
      handleChange(value) {
        console.log(value)
      }
    }
  
}
</script>

<style>
.mytest{
padding-bottom: 50px;
}
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
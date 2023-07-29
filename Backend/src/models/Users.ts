import { Model,DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql'

export interface UserInstance extends Model{
  id:number;
  date_created:string;
  name:string;
  username:string;
  credential:number;
  password:string;
  reset:number;
  logged:number;
  status:number;
}

export const User = sequelize.define<UserInstance>("User",{
  id:{
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  date_created:{
    type: DataTypes.DATE,
    defaultValue:DataTypes.NOW
  },
  name:{
    type: DataTypes.STRING
  },
  username:{
    type: DataTypes.STRING
  },
  credential:{
    type: DataTypes.INTEGER
  },
  password:{
    type: DataTypes.STRING
  },
  reset:{
    type: DataTypes.TINYINT
  },
  logged:{
    type: DataTypes.TINYINT
  },
  status:{
    type: DataTypes.TINYINT,
    defaultValue:1
  }
},{
  tableName: "users",
  timestamps: false
})
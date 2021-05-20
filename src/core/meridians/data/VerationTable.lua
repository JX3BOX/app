------------------------------------------------
-- 文件名    :  Venation.lua
-- 创建人    :  Wangtao
-- 创建时间  :  2008-04-07
-- 用途(模块):  经脉系统
-- 武功门派  :  无
-- 武功类型  :  无
-- 武功套路  :  无
-- 技能名称  :  无
-- 技能效果  :  打通经脉的脚本表
------------------------------------------------
-- 经脉消费，结构为：[ID] = 消费修为数值
BASE_VENATION       = 0
PHYSICS_VENATION    = 1
MAGIC_VENATION      = 2
ASSIST_VENATION     = 3
--  TRAIN_PER_HOUR 穴位消耗的每小时点数,现在的设计是 每个穴位需要的修为=穴位小时数*每小时点数
TRAIN_PER_HOUR      = 20

USE_TRAIN_LIMIT = 100000;

ERR_OPEN_VENATION_SUCCESS = 1;
ERR_OPEN_VENATION_ERROR   = 2;
ERR_OPEN_VENATION_LEVEL_LOWER = 3;
ERR_OPEN_VENATION_NOT_ENOUGH_TRAIN = 4;
ERR_OPEN_VENATION_NOT_OPEN = 5;
ERR_OPEN_VENATION_LIMIT_TRAIN = 6;

VenationCost =
{

    --基础系
    [60] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},-- ID为33的经脉被动技能第一级需要100点修为作为学习的消耗，此处，每个等级的消耗需要分别维护
    [62] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [63] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [64] = {20*TRAIN_PER_HOUR},
    [65] = {20*TRAIN_PER_HOUR},
    [66] = {20*TRAIN_PER_HOUR},
    [67] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [68] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [69] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [70] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [71] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [72] = {80*TRAIN_PER_HOUR},
    [73] = {22*TRAIN_PER_HOUR, 33*TRAIN_PER_HOUR, 44*TRAIN_PER_HOUR, 55*TRAIN_PER_HOUR, 66*TRAIN_PER_HOUR},
    [74] = {80*TRAIN_PER_HOUR},
    [75] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [76] = {80*TRAIN_PER_HOUR},
    [77] = {6*TRAIN_PER_HOUR,  9*TRAIN_PER_HOUR,  12*TRAIN_PER_HOUR, 15*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR},
    [78] = {6*TRAIN_PER_HOUR,  9*TRAIN_PER_HOUR,  12*TRAIN_PER_HOUR, 15*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR},
    [79] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [80] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [1196] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [82] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [83] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [84] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [85] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [1572] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
     [1573] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [86] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [87] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [88] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [89] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [90] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [1571] = {24*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 48*TRAIN_PER_HOUR, 60*TRAIN_PER_HOUR, 72*TRAIN_PER_HOUR},
    [ 9]  = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},
    [1206] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},
    [40] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},
    --辅助系
    [91] =  {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [92] =  {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [93] =  {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [94] =  {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [95] =  {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [96] =  {30*TRAIN_PER_HOUR, 60*TRAIN_PER_HOUR, 90*TRAIN_PER_HOUR},
    [97] =  {30*TRAIN_PER_HOUR, 60*TRAIN_PER_HOUR, 90*TRAIN_PER_HOUR},
    [98] =  {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [99] =  {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [110] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [111] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [112] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [113] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [114] = {30*TRAIN_PER_HOUR, 60*TRAIN_PER_HOUR, 90*TRAIN_PER_HOUR},
    [115] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [116] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [117] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [41] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},
    [42] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},
    [43] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},

    --外功系
    [118] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [119] = {20*TRAIN_PER_HOUR, 28*TRAIN_PER_HOUR, 40*TRAIN_PER_HOUR, 56*TRAIN_PER_HOUR, 76*TRAIN_PER_HOUR},
    [120] = {22*TRAIN_PER_HOUR, 33*TRAIN_PER_HOUR, 44*TRAIN_PER_HOUR, 55*TRAIN_PER_HOUR, 66*TRAIN_PER_HOUR},
    [121] = {20*TRAIN_PER_HOUR, 25*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR},
    [122] = {20*TRAIN_PER_HOUR, 25*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR},
    [123] = {20*TRAIN_PER_HOUR, 25*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR},
    [124] = {20*TRAIN_PER_HOUR, 25*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR},
    [126] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [127] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [128] = {20*TRAIN_PER_HOUR, 28*TRAIN_PER_HOUR, 40*TRAIN_PER_HOUR, 56*TRAIN_PER_HOUR, 76*TRAIN_PER_HOUR},
    [129] = {20*TRAIN_PER_HOUR, 28*TRAIN_PER_HOUR, 40*TRAIN_PER_HOUR, 56*TRAIN_PER_HOUR, 76*TRAIN_PER_HOUR},
    [153] = {80*TRAIN_PER_HOUR},
    [154] = {100*TRAIN_PER_HOUR},
    [155] = {100*TRAIN_PER_HOUR},
    [44] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},
    [45] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},


    --内功系
    [156] = {12*TRAIN_PER_HOUR, 18*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR},
    [157] = {20*TRAIN_PER_HOUR, 28*TRAIN_PER_HOUR, 40*TRAIN_PER_HOUR, 56*TRAIN_PER_HOUR, 76*TRAIN_PER_HOUR},
    [158] = {22*TRAIN_PER_HOUR, 33*TRAIN_PER_HOUR, 44*TRAIN_PER_HOUR, 55*TRAIN_PER_HOUR, 66*TRAIN_PER_HOUR},
    [159] = {20*TRAIN_PER_HOUR, 25*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR},
    [160] = {20*TRAIN_PER_HOUR, 25*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR},
    [161] = {20*TRAIN_PER_HOUR, 25*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR},
    [162] = {20*TRAIN_PER_HOUR, 25*TRAIN_PER_HOUR, 30*TRAIN_PER_HOUR},
    [163] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [164] = {18*TRAIN_PER_HOUR, 27*TRAIN_PER_HOUR, 36*TRAIN_PER_HOUR, 45*TRAIN_PER_HOUR, 54*TRAIN_PER_HOUR},
    [165] = {20*TRAIN_PER_HOUR, 28*TRAIN_PER_HOUR, 40*TRAIN_PER_HOUR, 56*TRAIN_PER_HOUR, 76*TRAIN_PER_HOUR},
    [166] = {20*TRAIN_PER_HOUR, 28*TRAIN_PER_HOUR, 40*TRAIN_PER_HOUR, 56*TRAIN_PER_HOUR, 76*TRAIN_PER_HOUR},
    [167] = {100*TRAIN_PER_HOUR},
    [168] = {80*TRAIN_PER_HOUR},
    [169] = {100*TRAIN_PER_HOUR},
    [46] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},
    [170] = {20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR, 20*TRAIN_PER_HOUR},

};

-- 经脉打通的需求
VenationRequireLevel =
{
    --基础系
    [60] = 20,-- 20级才能打通经脉
    [62] = 20,
    [63] = 20,
    [64] = 25,
    [65] = 25,
    [66] = 25,
    [67] = 25,
    [68] = 25,
    [69] = 25,
    [70] = 30,
    [71] = 35,
    [72] = 70,
    [73] = 40,
    [74] = 70,
    [75] = 60,
    [76] = 70,
    [77] = 20,
    [78] = 20,
    [79] = 25,
    [80] = 25,
    [1196] = 35,
    [82] = 25,
    [83] = 25,
    [84] = 40,
    [85] = 30,
    [1572] = 50,
     [1573] = 60,
    [86] = 60,
    [87] = 60,
    [88] = 60,
    [89] = 60,
    [90] = 60,
    [1571] = 70,
    [ 9] = 70,
    [1206] = 70,
    [40] = 70,

    --辅助系
    [91] = 25,
    [92] = 30,
    [93] = 30,
    [94] = 30,
    [95] = 35,
    [96] = 35,
    [97] = 35,
    [98] = 35,
    [99] = 35,
    [110] = 50,
    [111] = 35,
    [112] = 35,
    [113] = 50,
    [114] = 60,
    [115] = 60,
    [116] = 60,
    [117] = 60,
    [ 41] = 70,
    [42] = 70,
    [43] = 70,
    --外功系
    [118] = 25,
    [119] = 40,
    [120] = 35,
    [121] = 35,
    [122] = 35,
    [123] = 35,
    [124] = 35,
    [126] = 30,
    [127] = 30,
    [128] = 40,
    [129] = 50,
    [153] = 50,
    [154] = 60,
    [155] = 60,
    [44] = 70,
    [45] = 70,
    --内功系
    [156] = 25,
    [157] = 40,
    [158] = 35,
    [159] = 35,
    [160] = 35,
    [161] = 35,
    [162] = 35,
    [163] = 30,
    [164] = 30,
    [165] = 40,
    [166] = 50,
    [167] = 50,
    [168] = 60,
    [169] = 60,
    [46] = 70,
    [170] = 70,

};

VenationRequirement =
{
    --基础系经脉
    [62] = {
                {ID = 60, Level = 2},-- 此处为ID为62的经脉打通它需要ID为60的经脉的2级
           },
    [63] = {
                {ID = 62, Level = 2},
           },
    [64] = {
                {ID = 63, Level = 1},
           },
    [65] = {
                {ID = 63, Level = 1},
           },
    [66] = {
                {ID = 63, Level = 1},
           },
    [67] = {
                {ID = 64, Level = 1},
           },
    [68] = {
                {ID = 65, Level = 1},
           },
    [69] = {
                {ID = 66, Level = 1},
           },
    [70] = {
                {ID = 67, Level = 1},
                {ID = 68, Level = 1},
                {ID = 69, Level = 1},
           },
    [71] = {
                {ID = 70, Level = 2},
           },
    [72] = {
                {ID = 70, Level = 3},
           },
    [73] = {
                {ID = 71, Level = 2},
           },
    [74] = {
                {ID = 72, Level = 1},
           },
    [75] = {
                {ID = 73, Level = 3},
           },
    [76] = {
                {ID = 74, Level = 1},
           },
    [77] = {
                {ID = 60, Level = 2},
           },
    [78] = {
                {ID = 77, Level = 1},
           },
    [79] = {
                {ID = 78, Level = 1},
           },
    [80] = {
                {ID = 78, Level = 1},
           },
    [1196] = {
                {ID = 78, Level = 1},
           },
    [82] = {
                {ID = 79, Level = 1},
           },
    [83] = {
                {ID = 80, Level = 1},
           },
    [84] = {
                {ID = 1196, Level = 1},
           },
    [85] = {
                {ID = 82, Level = 1},
                {ID = 83, Level = 1},
           },
    [1572] = {
                {ID = 85, Level = 2},
           },
    [1573] = {
                {ID = 1572, Level = 2},
           },
    [86] = {
                {ID = 84, Level = 1},
           },
    [87] = {
                {ID = 86, Level = 2},
           },
    [88] = {
                {ID = 86, Level = 2},
           },
    [89] = {
                {ID = 87, Level = 2},
                {ID = 88, Level = 2},
           },
    [90] = {
                {ID = 89, Level = 2},
           },
    [1571] = {
                {ID = 90, Level = 2},
           },
    --辅助系
    [91] = {
                {ID = 64, Level = 1},
           },
    [92] = {
                {ID = 91, Level = 2},
           },
    [93] = {
                {ID = 91, Level = 2},
           },
    [94] = {
                {ID = 91, Level = 2},
           },
    [95] = {
                {ID = 92, Level = 2},
           },
    [96] = {
                {ID = 93, Level = 1},
           },
    [97] = {
                {ID = 93, Level = 1},
           },
    [98] = {
                {ID = 94, Level = 2},
           },
    [99] = {
                {ID = 95, Level = 2},
           },
    [110] = {
                {ID = 96, Level = 1},
                {ID = 97, Level = 1},
           },
    [111] = {
                {ID = 98, Level = 2},
           },
    [112] = {
                {ID = 99, Level = 2},
           },
    [113] = {
                {ID = 110, Level = 3},
           },
    [114] = {
                {ID = 111, Level = 1},
           },
    [115] = {
                {ID = 112, Level = 2},
           },
    [116] = {
                {ID = 113, Level = 3},
           },
    [117] = {
                {ID = 114, Level = 3},
           },

    --外功系
    [118] = {
                {ID = 65, Level = 1},
           },
    [127] = {
                {ID = 118, Level = 2},
           },
    [126] = {
                {ID = 118, Level = 2},
           },
    [121] = {
                {ID = 127, Level = 2},
           },
    [122] = {
                {ID = 127, Level = 2},
           },
    [123] = {
                {ID = 127, Level = 2},
           },
    [124] = {
                {ID = 127, Level = 2},
           },
    [120] = {
                {ID = 126, Level = 3},
           },
    [119] = {
                {ID = 121, Level = 1},
                {ID = 122, Level = 1},
                {ID = 123, Level = 1},
                {ID = 124, Level = 1},
           },
    [128] = {
                {ID = 120, Level = 2},
           },
    [129] = {
                {ID = 119, Level = 3},
           },
    [153] = {
                {ID = 128, Level = 3},
           },
    [154] = {
                {ID = 129, Level = 3},
           },
    [155] = {
                {ID = 153, Level = 1},
           },

    --内功系
    [156] = {
                {ID = 66, Level = 1},
           },
    [164] = {
                {ID = 156, Level = 2},
           },
    [163] = {
                {ID = 156, Level = 2},
           },
    [159] = {
                {ID = 164, Level = 2},
           },
    [160] = {
                {ID = 164, Level = 2},
           },
    [161] = {
                {ID = 164, Level = 2},
           },
    [162] = {
                {ID = 164, Level = 2},
           },
    [158] = {
                {ID = 163, Level = 3},
           },
    [157] = {
                {ID = 159, Level = 1},
                {ID = 160, Level = 1},
                {ID = 161, Level = 1},
                {ID = 162, Level = 1},
           },
    [165] = {
                {ID = 158, Level = 2},
           },
    [166] = {
                {ID = 157, Level = 3},
           },
    [167] = {
                {ID = 165, Level = 1},
           },
    [168] = {
                {ID = 166, Level = 3},
           },
    [169] = {
                {ID = 167, Level = 1},
           },

};

VenationDifficult =
{
    --基础系各经脉成功率
    [60] = {1024, 973, 921, 870, 819}, --33号经脉第一级的成功率为50%，第二级的成功率为100%
    [62] = {1024, 973, 921, 870, 819},
    [63] = {1024, 973, 921, 870, 819},
    [64] = {768},
    [65] = {768},
    [66] = {768},
    [67] = {1024, 973, 921, 870, 819},
    [68] = {1024, 973, 921, 870, 819},
    [69] = {1024, 973, 921, 870, 819},
    [70] = {921, 870, 819, 768, 717},
    [71] = {921, 870, 819, 768, 717},
    [72] = {614},
    [73] = {870, 819, 768, 717, 666},
    [74] = {614},
    [75] = {819, 768, 717, 666, 614},
    [76] = {614},
    [77] = {1024, 973, 921, 870, 819},
    [78] = {1024, 973, 921, 870, 819},
    [79] = {921, 870, 819, 768, 717},
    [80] = {921, 870, 819, 768, 717},
    [1196] = {921, 870, 819, 768, 717},
    [82] = {921, 870, 819, 768, 717},
    [83] = {921, 870, 819, 768, 717},
    [84] = {921, 870, 819, 768, 717},
    [85] = {870, 819, 768, 717, 666},
    [1572] = {819, 768, 717, 666, 614},
     [1573] = {819, 768, 717, 666, 614},
    [86] = {870, 819, 768, 717, 666},
    [87] = {921, 870, 819, 768, 717},
    [88] = {921, 870, 819, 768, 717},
    [89] = {870, 819, 768, 717, 666},
    [90] = {819, 768, 717, 666, 614},
    [1571] = {768, 717, 666, 614, 563},
    [ 9] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},
    [1206] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},
    [40] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},

    --辅助系各经脉各级成功率
    [91] = {921, 870, 819, 768, 717},
    [92] = {870, 819, 768, 717, 666},
    [93] = {870, 819, 768, 717, 666},
    [94] = {870, 819, 768, 717, 666},
    [95] = {819, 768, 717, 666, 614},
    [96] = {819, 666, 563},
    [97] = {819, 666, 563},
    [98] = {819, 768, 717, 666, 614},
    [99] = {819, 768, 717, 666, 614},
    [110] = {768, 717, 666, 614, 563},
    [111] = {768, 717, 666, 614, 563},
    [112] = {768, 717, 666, 614, 563},
    [113] = {768, 717, 666, 614, 563},
    [114] = {717, 666, 614},
    [115] = {768, 717, 666, 614, 563},
    [116] = {768, 717, 666, 614, 563},
    [117] = {768, 717, 666, 614, 563},
    [41] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},
    [42] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},
    [43] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},

    --外功系各经脉各级成功率
    [118] = {921, 870, 819, 768, 717},
    [127] = {870, 819, 768, 717, 666},
    [126] = {819, 768, 717, 666, 614},
    [121] = {768, 717, 666},
    [122] = {768, 717, 666},
    [123] = {768, 717, 666},
    [124] = {768, 717, 666},
    [120] = {819, 768, 717, 666, 614},
    [119] = {819, 768, 717, 666, 614},
    [128] = {819, 768, 717, 666, 614},
    [129] = {768, 717, 666, 614, 563},
    [154] = {614},
    [153] = {614},
    [155] = {614},
    [44] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},
    [45] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},

    --内功系各经脉各级成功率
    [156] = {921, 870, 819, 768, 717},
    [164] = {870, 819, 768, 717, 666},
    [163] = {819, 768, 717, 666, 614},
    [159] = {768, 717, 666},
    [160] = {768, 717, 666},
    [161] = {768, 717, 666},
    [162] = {768, 717, 666},
    [158] = {819, 768, 717, 666, 614},
    [157] = {819, 768, 717, 666, 614},
    [165] = {819, 768, 717, 666, 614},
    [166] = {768, 717, 666, 614, 563},
    [167] = {614},
    [168] = {614},
    [169] = {614},
    [46] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},
    [170] = {1024,1024,1024,1024,1024,1024,1024,1024,1024,1024},

};

-- 经脉特殊效果
VenationEffect =
{
    [9]  = {Requirement = {60,62,63,64,65,66,67,68,69,70,71,73,75}, RequirementLevel = {5,5,5,1,1,1,5,5,5,5,5,5,5}}, -- 这个特效需要3条经脉被打通，分别是1、2、3号被动技能，获得特效的被动技能ID为512
    [1206]  = {Requirement = {60,62,63,64,65,66,67,68,69,70,72,74,76}, RequirementLevel = {5,5,5,1,1,1,5,5,5,5,1,1,1}},
    [40]  = {Requirement = {60,77,78,79,80,82,83,85,1572,1573,1196,84,86,87,88,89,90,1571}, RequirementLevel = {5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5}},
    [41]  = {Requirement = {91,92,95,99,112,115}, RequirementLevel = {5,5,5,5,5,5}},
    [42]  = {Requirement = {91,93,96,97,110,113,116}, RequirementLevel = {5,5,3,3,5,5,5}},
    [43]  = {Requirement = {91,94,98,111,114,117}, RequirementLevel = {5,5,5,5,3,5}},
    [44]  = {Requirement = {118,127,121,122,123,124,119,129,154}, RequirementLevel = {5,5,3,3,3,3,5,5,1}},
    [45]  = {Requirement = {118,120,126,128,153,155}, RequirementLevel = {5,5,5,5,1,1}},
    [46]  = {Requirement = {156,164,159,160,161,162,157,166,168}, RequirementLevel = {5,5,3,3,3,3,5,5,1}},
    [170] = {Requirement = {156,158,163,165,167,169}, RequirementLevel = {5,5,5,5,1,1}},

};

VenationType =
{
    --基础系
    [60] = BASE_VENATION,
    [62] = BASE_VENATION,
    [63] = BASE_VENATION,
    [64] = BASE_VENATION,
    [65] = BASE_VENATION,
    [66] = BASE_VENATION,
    [67] = BASE_VENATION,
    [68] = BASE_VENATION,
    [69] = BASE_VENATION,
    [70] = BASE_VENATION,
    [71] = BASE_VENATION,
    [72] = BASE_VENATION,
    [73] = BASE_VENATION,
    [74] = BASE_VENATION,
    [75] = BASE_VENATION,
    [76] = BASE_VENATION,
    [77] = BASE_VENATION,
    [78] = BASE_VENATION,
    [79] = BASE_VENATION,
    [80] = BASE_VENATION,
    [1196] = BASE_VENATION,
    [82] = BASE_VENATION,
    [83] = BASE_VENATION,
    [84] = BASE_VENATION,
    [85] = BASE_VENATION,
    [1572] = BASE_VENATION,
    [1573] = BASE_VENATION,
    [86] = BASE_VENATION,
    [87] = BASE_VENATION,
    [88] = BASE_VENATION,
    [89] = BASE_VENATION,
    [90] = BASE_VENATION,
    [1571] = BASE_VENATION,
    [ 9] = BASE_VENATION,
    [1206] = BASE_VENATION,
    [40] = BASE_VENATION,
    --辅助系
    [91] = ASSIST_VENATION,
    [92] = ASSIST_VENATION,
    [93] = ASSIST_VENATION,
    [94] = ASSIST_VENATION,
    [95] = ASSIST_VENATION,
    [96] = ASSIST_VENATION,
    [97] = ASSIST_VENATION,
    [98] = ASSIST_VENATION,
    [99] = ASSIST_VENATION,
    [110] = ASSIST_VENATION,
    [111] = ASSIST_VENATION,
    [112] = ASSIST_VENATION,
    [113] = ASSIST_VENATION,
    [114] = ASSIST_VENATION,
    [115] = ASSIST_VENATION,
    [116] = ASSIST_VENATION,
    [117] = ASSIST_VENATION,
    [41] = ASSIST_VENATION,
    [42] = ASSIST_VENATION,
    [43] = ASSIST_VENATION,
    --外功系
    [118] = PHYSICS_VENATION,
    [119] = PHYSICS_VENATION,
    [120] = PHYSICS_VENATION,
    [121] = PHYSICS_VENATION,
    [122] = PHYSICS_VENATION,
    [123] = PHYSICS_VENATION,
    [124] = PHYSICS_VENATION,
    [126] = PHYSICS_VENATION,
    [127] = PHYSICS_VENATION,
    [128] = PHYSICS_VENATION,
    [129] = PHYSICS_VENATION,
    [153] = PHYSICS_VENATION,
    [154] = PHYSICS_VENATION,
    [155] = PHYSICS_VENATION,
    [44] = PHYSICS_VENATION,
    [45] = PHYSICS_VENATION,
    --内功系
    [156] = MAGIC_VENATION,
    [157] = MAGIC_VENATION,
    [158] = MAGIC_VENATION,
    [159] = MAGIC_VENATION,
    [160] = MAGIC_VENATION,
    [161] = MAGIC_VENATION,
    [162] = MAGIC_VENATION,
    [163] = MAGIC_VENATION,
    [164] = MAGIC_VENATION,
    [165] = MAGIC_VENATION,
    [166] = MAGIC_VENATION,
    [167] = MAGIC_VENATION,
    [168] = MAGIC_VENATION,
    [169] = MAGIC_VENATION,
    [46] = MAGIC_VENATION,
    [170] = MAGIC_VENATION,
};

tQixueToBuff =
{
    [ 9]  = {qijing = 1975, xiaoguo = 1985},
    [1206]  = {qijing = 1972, xiaoguo = 1982},
    [40]  = {qijing = 1969, xiaoguo = 1979},
    [41]  = {qijing = 1974, xiaoguo = 1984},
    [42]  = {qijing = 1968, xiaoguo = 1978},
    [43]  = {qijing = 1966, xiaoguo = 1976},
    [44]  = {qijing = 1973, xiaoguo = 1983},
    [45]  = {qijing = 1970, xiaoguo = 1980},
    [46]  = {qijing = 1971, xiaoguo = 1981},
    [170] = {qijing = 1967, xiaoguo = 1977},
};
tQixueToXiaoBuff =
{
    [9]  = {qijing = 2001, xiaoguo = 2011}, --下极愈+点穴修为
    [1206]  = {qijing = 1998, xiaoguo = 2008}, --崇骨+传功
    [40]  = {qijing = 1995, xiaoguo = 2005}, --气端+跑速
    [41]  = {qijing = 2000, xiaoguo = 2010}, --腰眼+气血
    [42]  = {qijing = 1994, xiaoguo = 2004}, --抬肩+减伤
    [43]  = {qijing = 1992, xiaoguo = 2002}, --情中+运功不被打退
    [44]  = {qijing = 1999, xiaoguo = 2009}, --曲泉+外功会心
    [45]  = {qijing = 1996, xiaoguo = 2006}, --龙玄+外功攻击
    [46]  = {qijing = 1997, xiaoguo = 2007}, --极泉+内功会心
    [170] = {qijing = 1993, xiaoguo = 2003}, --合阳+内功攻击
}

tLevelToTain =
{
[1] = 2222,
[2] = 2353,
[3] = 2500,
[4] = 3333,
[5] = 3636,
[6] = 4000,
[7] = 6667,
[8] = 8000,
[9] = 10000,
[10] = 40000,
}


function CanOpenVenation(player, nVenationID)
    local i         = 1;
    local bCanOpen  = false;
    local ErrCode   = ERR_OPEN_VENATION_SUCCESS;
    local CurLevel  = player.GetSkillLevel(nVenationID);
    local nCost     = player.nMaxTrainValue + 1;
    local bEffect   = false;

    local nPlayerLevel = player.nLevel;

    if not VenationRequireLevel[nVenationID] then
        return false, ERR_OPEN_VENATION_ERROR;
    end

    if nPlayerLevel < VenationRequireLevel[nVenationID] then
        return false, ERR_OPEN_VENATION_LEVEL_LOWER;
    end

    for nEffectID, EffectInfo in pairs(VenationEffect) do
        if nEffectID == nVenationID then
            bEffect = true;
            local nLevel = player.GetSkillLevel(nEffectID);

            if nLevel == 10 then
                return false, ERR_OPEN_VENATION_ERROR;
            end

            for i, EffectRequirement in pairs(EffectInfo.Requirement) do
                local nSkillLevel = player.GetSkillLevel(EffectRequirement);

                if nSkillLevel < EffectInfo.RequirementLevel[i] then
                    return false, ERR_OPEN_VENATION_ERROR;
                end
            end
        end
    end

    if VenationCost[nVenationID] == nil then
        return false, ERR_OPEN_VENATION_ERROR;
    end

    if VenationCost[nVenationID][CurLevel + 1] then
        nCost = GetActualCostTrain(player, VenationCost[nVenationID][CurLevel + 1]);
    end

    if nCost > player.nCurrentTrainValue then
        return false, ERR_OPEN_VENATION_NOT_ENOUGH_TRAIN;
    end

    if bEffect == false and nCost + player.nUsedTrainValue > USE_TRAIN_LIMIT then
        return false, ERR_OPEN_VENATION_LIMIT_TRAIN;
    end

    if not VenationRequirement[nVenationID] then
        return true
    end

    ErrCode = ERR_OPEN_VENATION_NOT_OPEN;
    while VenationRequirement[nVenationID][i] do
        local nSkillLevel = player.GetSkillLevel(VenationRequirement[nVenationID][i].ID);
        if nSkillLevel >= VenationRequirement[nVenationID][i].Level then -- 如果有一个前置的经脉符合条件，就可以打通
            bCanOpen = true;
            ErrCode  = ERR_OPEN_VENATION_SUCCESS;
            break;
        end
        i = i + 1;
    end

    return bCanOpen, ErrCode;
end;

function CalcVenationTrainvalue(player)
    return player.nUsedTrainValue, USE_TRAIN_LIMIT;
end;

function GetActualCostTrain(player, nCostTrain)
    local nReduceCostSkillLevelA = player.GetSkillLevel(73); --判断是否学到减少通穴损耗的被动技能
    local nReduceCostSkillLevelB = player.GetSkillLevel(9); --判断是否学到减少通穴损耗的被动技能(环通)
    local nReduceCostSkillLevel =   nReduceCostSkillLevelA+nReduceCostSkillLevelB;

    nCostTrain = nCostTrain*(1-0.01*nReduceCostSkillLevel);

    return math.floor(nCostTrain);
end

function GetRestoreTrain(player, nCostTrain)



    local nLossTrainSkillLevel = player.GetSkillLevel(63);
    local nLossTrain = 0;
    if nLossTrainSkillLevel == 0 then
        nLossTrain = nCostTrain * 0.35;
    elseif nLossTrainSkillLevel == 1 then
        nLossTrain = nCostTrain * 0.3;
    elseif nLossTrainSkillLevel == 2 then
        nLossTrain = nCostTrain * 0.25;
    elseif nLossTrainSkillLevel == 3 then
        nLossTrain = nCostTrain * 0.2;
    elseif nLossTrainSkillLevel == 4 then
        nLossTrain = nCostTrain * 0.15;
    elseif nLossTrainSkillLevel == 5 then
        nLossTrain = nCostTrain * 0.1;
    end

    return math.floor(nCostTrain - nLossTrain)
end

function CalcResetCost(player)
    return math.floor(player.nUsedTrainValue / 500 * 10000);
end

function CalcEffectResetCost(player)
        --[[怀旧版临时处理
        local nCostCount = 0
        for k, v in pairs(tVenationEffectID) do
            nCostCount = nCostCount + (tZhuanhuan[player.GetSkillLevel(v)] or 0)
        end
    return math.floor(nCostCount / 2000 * 10000);
    --]]
    return 3000;
end

function GetResetDiscount(player, nDiscountTrain)
    local nReduceDiscountSkillLevel = player.GetSkillLevel(71); --判断是否学到减少洗点损耗的被动技能

    if nReduceDiscountSkillLevel == 0 then
        nDiscountTrain = nDiscountTrain * 0.9;
    elseif nReduceDiscountSkillLevel == 1 then
        nDiscountTrain = nDiscountTrain * 0.92;
    elseif nReduceDiscountSkillLevel == 2 then
        nDiscountTrain = nDiscountTrain * 0.94;
    elseif nReduceDiscountSkillLevel == 3 then
        nDiscountTrain = nDiscountTrain * 0.96;
    elseif nReduceDiscountSkillLevel == 4 then
        nDiscountTrain = nDiscountTrain * 0.98;
    elseif nReduceDiscountSkillLevel == 5 then
        nDiscountTrain = nDiscountTrain * 1;
    end

    return math.floor(nDiscountTrain);
end

function GetGongliCount(player)
    local tSkillPoint = {9, 1206,40,41,42,43,44,45,46,170}--奇穴对应技能
    local tZhuanhuan = {2222, 2353, 2500, 3333, 3636, 4000, 6667, 8000, 10000, 40000} --奇穴等级对应修为
    local nDantian =  player.nUsedTrainValue --玩家丹田修为值
    local nQihai = player.nCurrentTrainValue --玩家气海修为值
    local nGongliCount = 0
    for k, v in pairs(tSkillPoint) do
        nGongliCount = nGongliCount + (tZhuanhuan[player.GetSkillLevel(v)] or 0)
    end
    nGongliCount = nGongliCount + nDantian + nQihai
    return nGongliCount
end


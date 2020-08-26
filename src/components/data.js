const treeObj = {
  root: {
    id: 100,
    label: "员工管理系统",
    children: [
      {
        id: 101,
        label: "一级菜单01",
        children: [
          { id: 1011, label: "二级菜单01" },
          { id: 1012, label: "二级菜单02" },
          { id: 1013, label: "二级菜单03" }
        ]
      },
      {
        id: 102,
        label: "一级菜单02",
        children: [
          { id: 1021, label: "二级菜单021" },
            {
                id: 1022,
                label: "二级菜单022",
                children: [
                    { id: 10221, label: "二级菜单10221" },
                    { id: 10222, label: "二级菜单10222" },
                    { id: 10223, label: "二级菜单10223" } 
                ]
            },
          { id: 1023, label: "二级菜单023" }
        ]
      },
      {
        id: 103,
        label: "一级菜单03",
        children: [
          { id: 1031, label: "二级菜单031" },
          { id: 1032, label: "二级菜单032" },
          { id: 1033, label: "二级菜单033" }
        ]
      }
    ]
  }
};

export default treeObj;

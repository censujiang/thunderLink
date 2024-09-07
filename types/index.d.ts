interface ShortcutOptions {
  /**
   * 快捷方式的名称【必填】
   */
  name: string;
  /**
   * 快捷方式指向的任务组内的文件相对路径【必填】
   */
  targetFile: string;
  /**
   * 运行参数【选填】
   */
  runParams?: string;
  /**
   * 起始位置【选填】
   */
  startIn?: string;
}

interface Task {
  /**
   * 指定下载文件名（含扩展名）。【若不填此项，将根据下载 URL 自动获取文件名】
   */
  name?: string;
  /**
   * 指定下载地址【必填项】
   */
  url: string;
  /**
   * 指定文件的下载目录,相对于当前的 downloadDir 目录【一般不必填写，除非某些文件的下载地址的路径不符合你的需求】
   */
  dir?: string;
}

interface TaskOptions {
  /**
   * 指定批量任务的下载目录名称，迅雷会在用户剩余空间最大的磁盘根目录中创建这个目录。【若不填此项，会下载到用户默认下载目录】
   */
  downloadDir?: string;
  /**
   * 指定任务组名称，可将批量任务合并成类似 BT 任务的【任务组】，迅雷将在下载目录中创建同名子文件夹保存所有下载文件。【推荐填写。若不填此项，迅雷下载列表会显示所有本次创建的下载任务，可能会使用户的下载列表显得杂乱】
   */
  taskGroupName?: string;
  /**
   * 如果您希望批量下载的文件在用户本地保持与服务器上相同的文件目录结构，可以指定排除 URL 的前缀，迅雷会根据被排除前缀后的 URL 路径，创建文件夹保存对应的文件。【本项需配合 taskGroupName 使用，通常用于下载绿色版游戏或程序。若不填此项，将把所有文件都放置于同一层下载目录中】
   */
  excludePath?: string;
  /**
   * 指定批量任务中的安装程序或主程序，该任务组下载完成后，用户在迅雷中双击此任务组，将运行指定的文件。该任务组的图标也将变成指定文件的图标。【本项需配合 taskGroupName 使用，通常用于下载绿色版游戏或程序。若不填此项，下载完成后，用户双击此任务，将打开下载文件所在的文件夹】
   */
  installFile?: string;
  /**
   * 指定打开安装程序或主程序时的启动参数【视需求填写】
   */
  runParams?: string;
  /**
   * 下载完成后创建桌面快捷方式。【本项需配合 taskGroupName 使用，通常用于下载绿色版游戏或程序。若不填此项，将不在桌面创建快捷方式】
   */
  createShortcut?: ShortcutOptions;
  /**
   * 指定原始地址线程数【一般不必填写，但某些下载地址的服务器会限制单个 IP 的最大同时连接数，例如部分“网盘、在线视频”网站等，此时可将此项数值设为 1，从而避免被服务器断开连接】
   */
  threadCount?: number;
  /**
   * 是否隐藏下载到云盘入口
   */
  hideYunPan?: '1' | '0';
  /**
   * 指定迅雷发起下载请求时上报的引用页【一般不必填写，除非某些下载地址的服务器会判断引用页】
   */
  referer?: string;
  /**
   * 指定迅雷发起下载请求时上报的 UA【一般不必填写，除非某些下载地址的服务器会判断 UA】
   */
  userAgent?: string;
  /**
   * 批量任务的下载文件列表
   */
  tasks: Task[];
}


/**
 * 扫描DOM并创建迅雷下载任务
 */
declare const thunderLink = void 0 || {
  /**
   * 创建任务
   * @param task 任务参数
   */
  newTask(task: TaskOptions): void;
}

declare window.thunderLink = thunderLink;
# NASAHackathon2021

## You are welcome to click the link below to view our project demo.

[Project Demo Link](http://nasa.thebestyea.net/)


##UAV ROAD INSPECTION MODULE
###Requirements for Windows, Linux and macOS

* CMake >= 3.18: https://cmake.org/download/
*  Powershell (already installed on windows): https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell
* CUDA >= 10.2: https://developer.nvidia.com/cuda-toolkit-archive (on Linux do Post-installation Actions)
* OpenCV >= 2.4: use your preferred package manager (brew, apt), build from source using vcpkg or download from OpenCV official site (on Windows set system variable * OpenCV_DIR = C:\opencv\build - where are the include and x64 folders image)
* cuDNN >= 8.0.2 https://developer.nvidia.com/rdp/cudnn-archive (on Linux copy cudnn.h,libcudnn.so... as described here https://docs.nvidia.com/deeplearning/sdk/cudnn-install/index.html#installlinux-tar , on Windows copy cudnn.h,cudnn64_7.dll, cudnn64_7.lib as described here https://docs.nvidia.com/deeplearning/sdk/cudnn-install/index.html#installwindows )
* GPU with CC >= 3.0: https://en.wikipedia.org/wiki/CUDA#GPUs_supported

### Train
#### Step 1. Download  Darknet UAVRoadInspectionModule/darknet
#### Step 2. Revise GPU, CUDNN, CUDNN_HALF, OPENCV in Makefile to 1
    sed -i "s/GPU=0/GPU=1/g" darknet/Makefile
    sed -i "s/CUDNN=0/CUDNN=1/g" darknet/Makefile
    sed -i "s/CUDNN_HALF=0/CUDNN_HALF=1/g" darknet/Makefile
    sed -i "s/OPENCV=0/OPENCV=1/g" darknet/Makefile

#### Step 3. Compile
    cd darknet; 
    make
#### Step 4. Create a folder to put files
* 4-1 Create a folder named Road_detection

      cd ..; mkdir Road_detection
      cd Road_detection
* 4-2 Create two folders for cfg and weights, and copy road.data, road.names in cfg
      
      import os
      import shutil
      
      if not os.path.exists(“Road_detection”):
        os.mkdir(“Road_detection”)
      if not os.path.exists(“Road_detection/cfg”):
        os.mkdir(“Road_detection/cfg”) 
        os.mkdir(“Road_detection/weights”)
      if not os.path.exists(“Road_detection/cfg/road.data”):
        shutil.copyfile(“darknet/cfg/coco.data”, “Road_detection/cfg/road.data”)
      if not os.path.exists(“Road_detection/cfg/road.names”):
        shutil.copyfile(“darknet/cfg/coco.names”, “Road_detection/cfg/road.names”)
#### Step 5. Prepare a training data set

File path:

* darknet
* Road_detection
- cfg
* road.data
* road.names
*	train.txt	//the path of training data
*	valid.txt	//the path of valida data
-	weights
-	road_train	//contain images and label datas
-	road_valid	//contain images and label datas




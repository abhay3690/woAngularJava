export class CONSTANTS {
    public static AUTH_ACCESS_KEY = "dG0kLWNMIWVuMTp0bSQtJDNDJmUx";
    public static COOKIE_ACCESSTOKEN = "accessToken";
    public static USER = "user";
    public static LOGIN_COOKIE_EXPIRATION_DAYS : number = 60 * 60 * 24 * 30 //30 days;
    // Pattern related constants
    public static USER_NAME_PATTERN = "^[a-zA-Z- ]+$";

    public static PASSPHRASE = "WEBS_tms_ThisIs#TMSProject#For#WEBS_OPTI_MIZATION";
    public static SALT = "WEBS_OPTI_MIZATION/TMS_PROJECT";

    public static ENCRYPT_KEY = "lDMCVNEEsaab/7jdKS8d02/KdshdEUMDSDLDWp+sS1s=";
    public static ENCRYPT_IV = "/iSHmsSJCp86GS3g8jSN20==";
    // Added new pattern for first and last name to prevent user add only space
    //public static USER_NAME_PATTERN = "^[a-zA-Z_]+( [a-zA-Z_]+)*$";

    //public static USER_NAME_PATTERN_WITH_DASH = "^[a-zA-Z- ]+$";
    public static ALPHANUMERIC_PATTERN = "^[0-9a-zA-Z ]+$";
    public static NUMERIC_PATTERN = "^[0-9]+$";

    public static EMAIL_PATTERN ="^[a-zA-Z0-9._-]+@(([a-zA-Z0-9]([a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+(com|co.in|COM|CO.IN|co.org|software|co))$";

    public static USER_ID="userId";
    public static USER_NAME="userName";
    public static TEAM_ROLE="teamRole";
    public static MANAGER="MANAGER";
    public static LEADER="LEADER";
    public static DEVELOPER="DEVELOPER";
    public static TESTER="TESTER";
    public static DESIGNER = "DESIGNER";
    public static BUSINESS_ANALYST = "BUSINESS_ANALYST";
    // Task type
    public static TESTING="Testing";
    public static USER_ROLE="userRole";
    public static ROLE_USER="ROLE_USER";
    public static ROLE_ADMIN="ROLE_ADMIN"
    public static ROLE_REPORT_MANAGER="ROLE_REPORT_MANAGER"

    public static PAUSE="PAUSE";
    public static RESUME="RESUME";

    // TASK STATUS
    public static TASK_STATUS_ASSIGNED ="ASSIGNED";
    public static TASK_STATUS_WORKING ="WORKING";
    public static TASK_STATUS_PENDING ="PENDING";
    public static TASK_STATUS_COMPLETED ="COMPLETED";
    
    public static BACKLOG ="BACKLOG";
    public static OVERDUE ="OVERDUE";

    //TIMER STATUS
    public static TIMER_STATUS_START ="START";
    public static TIMER_STATUS_PAUSE ="PAUSE";
    public static TIMER_STATUS_RESUME ="RESUME";
    public static TIMER_STATUS_STOP ="STOP";

    //API CONSTANTS
    public static LOGIN_USER_NAME = 'username';
    public static LOGIN_USER_PASSWORD = 'password';
    public static GRANT_TYPE :string= 'grant_type';
    public static USER_AUTHORIZATION :string= 'Authorization';
    public static HEADER_TYPE :string= 'Basic ';
    public static CONTENT_TYPE :string= 'Content-type';
    public static ENCODER_DATA :string= 'application/x-www-form-urlencoded';
    public static USER_EMAIL :string= 'UserEmail';

    public static PROJECT_ID :string= 'projectId';

    //ATTACHED FILE SIZE LIMIT
    public static MAX_FILE_UPLOAD_SIZE_LIMIT = 10485760;  // MAX SIZE FOR SINGLE IMAGE in Bytes Only equivalent to 10MB 
    public static MAX_TOTAL_FILE_UPLOAD_SIZE_LIMIT = 52428800; // MAX SIZE FOR LIST OF IMAGES OR VIDEOS in Bytes Only equivalent to 50 MB
    public static MAX_VIDEO_FILE_UPLOAD_SIZE_LIMIT = 10485760;  // MAX SIZE FOR Video in Bytes Only equivalent to 10MB
    public static LOGO_MIN_WIDTH: 50;
    public static LOGO_MIN_HEIGHT: 50;
    public static TASK_LIMIT_IN_BOARD:number = 10;
    public static TASK_LIMIT_IN_BOARD_MYTASK:number = 10;
    public static TASK_LIMIT_FOR_LIST_VIEW:number = 20;

     //Slot activities
     public static TAKING_INTERVIEW = "TAKING INTERVIEW";
     public static OFFICE_ACTIVITY = "OFFICE ACTIVITY";

     //Tracker Platform
     public static WEB_TRACKER = 'WEB_TRACKER';
     public static DESKTOP_TRACKER = 'DESKTOP_TRACKER';
     //project methodology
     public static AGILE = "AGILE";
     public static WATERFALL = "WATERFALL";

     //sprint status
     public static IN_PROGRESS = "In Progress";
     public static ARCHIVED = "Archived";
     public static UPCOMING = "Upcoming";

     //Task type
     public static EPIC = "Epic";
     public static TASK = "Task";
     public static USER_STORY = "User Story";
     public static FEATURE = "Feature";

     //Sprint dropdown page size in board
     public static SPRINT_DROPDOWN_PAGE_SIZE = 20;

     //Offline status in progressbelt
     public static OFFLINE_GRACE_PERIOD_MINUTES = 10 * 60 * 1000; // 10 minutes

     public static TASK_HIERARCHY_PAGESIZE = 20;
}
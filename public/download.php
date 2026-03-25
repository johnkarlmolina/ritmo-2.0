<?php
// Define the path to the file
$file = __DIR__ . '/apk/Ritmo.apk';

// Check if the file exists
if (file_exists($file)) {
    // Set headers to force download
    header('Content-Description: File Transfer');
    header('Content-Type: application/vnd.android.package-archive');
    header('Content-Disposition: attachment; filename="' . basename($file) . '"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    
    // Clear output buffer
    flush(); 
    
    // Read the file and send it to the output buffer
    readfile($file);
    exit;
} else {
    // If the file does not exist, show an error
    http_response_code(404);
    echo "Error: File not found.";
}
?>

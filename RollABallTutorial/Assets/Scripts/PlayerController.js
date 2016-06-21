#pragma strict

var rb :Rigidbody;
var speed : float = 100;
var count : int;
var countText: UnityEngine.UI.Text;



function Start () {
    rb = GetComponent.<Rigidbody>();
    count = 0;
    countText.text = "Count: ";
}

function FixedUpdate () {
    var moveHorizontal : float =  Input.GetAxis("Horizontal");
    var moveVertical : float =  Input.GetAxis("Vertical");
    var vector3 = new Vector3(moveHorizontal,0.0f,moveVertical);
    rb.AddForce (vector3 * speed);
}
function OnTriggerEnter (other : Collider) {
    if(other.gameObject.CompareTag("Pick Up"))
    {
        other.gameObject.SetActive(false);
        count++;
    }
}